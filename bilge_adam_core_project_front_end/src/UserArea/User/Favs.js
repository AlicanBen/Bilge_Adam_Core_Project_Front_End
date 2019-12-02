import React from "react";
import { Cookies } from "react-cookie";
import { NavBar } from "../UserAreaComponentIndex";
import * as rb from "react-bootstrap";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import axios from "axios";

class Favs extends React.Component {
  constructor(props) {
    super(props);
    const cookie = new Cookies();
    var data = JSON.parse(atob(cookie.get("properties")));
    this.state = {
      favUrl: apiUrl + "User/GetUserFavs/" + data.id,
      deletefavs: apiUrl + "User/DeleteFavs/" + data.id,
      favs: []
    };
    this.deleteFavs = this.deleteFavs.bind(this);

    axios
      .get(this.state.favUrl)
      .then(res => {
        this.setState({ favs: res.data });
      })
      .catch(err => {});
  }
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }

  deleteFavs(props) {
    var datas = {
      dateOfAdd: props.dateOfAdd,
      details: props.details,
      duration: props.duration,
      genre: props.genre,
      id: props.id,
      imdbRating: props.imdbRating,
      name: props.name,
      photoUrl: props.photoUrl,
      releaseDate: props.releaseDate
    };
    console.log(datas);
    console.log(props);
    axios
      .put(this.state.deletefavs, datas, {
        headers: { "Content-Type": "application/json" }
      })
      .then(obj => {
        console.log("Congrats movie succesfully deleted.");
        //  console.log(obj.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    var _sizes;

    if (this.props.sizes === "sm") {
      _sizes = { width: "67 %" };
    } else {
      _sizes = { width: "auto" };
    }
    const cookie = new Cookies();
    return (
      <div>
        <NavBar></NavBar>
        <div className="container">
          <div className="row">
            <br />
          </div>
          <div className="row">
            <br /> <br /> <h3 style={{ color: "#28a745" }}>Favorites </h3>
          </div>{" "}
          <div className="row" style={{ aling: "center" }}>
            <br />
            <rb.CardColumns>
              {" "}
              {this.state.favs.map(item => (
                <rb.Card style={_sizes} border="success" bg="secondary">
                  <center>
                    <rb.Card.Img style={_sizes} src={item.photoUrl} />
                  </center>
                  <rb.Card.Body>
                    <rb.Card.Title>{item.name} </rb.Card.Title>
                    <rb.Card.Text>
                      Genre : {" " + item.genre}
                      <br />
                      Duration : {" " + item.duration}
                    </rb.Card.Text>
                  </rb.Card.Body>
                  <rb.Card.Footer>
                    <rb.Button
                      crossorigin
                      onClick={() =>
                        this.props.history.push({
                          pathname: "/User/Movie/Detail",
                          state: { detail: item }
                        })
                      }
                    >
                      More Details
                    </rb.Button>
                    <rb.Button onClick={() => this.deleteFavs(item)}>
                      Remove
                    </rb.Button>
                    ;
                  </rb.Card.Footer>
                </rb.Card>
              ))}
            </rb.CardColumns>
          </div>
        </div>
      </div>
    );
  }
}

export default Favs;
