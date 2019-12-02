import React from "react";
import { NavBar } from "../UserAreaComponentIndex";
import * as rb from "react-bootstrap";
import axios from "axios";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import { Cookies } from "react-cookie";
import "../../assets/css/style.css";
class Watches extends React.Component {
  constructor(props) {
    super(props);
    const cookie = new Cookies();
    var data = JSON.parse(atob(cookie.get("properties")));
    this.state = {
      watchUrl: apiUrl + "User/GetUserWatches/" + data.id,
      moviesUrl: apiUrl + "Movie",
      deletetowatches: apiUrl + "User/DeleteWatches/" + data.id,
      watch: [],
      movies: []
    };
    this.deleteWatches = this.deleteWatches.bind(this);

    axios
      .get(this.state.watchUrl)
      .then(res => {
        this.setState({ watch: res.data });
        console.log(res.data);
      })
      .catch(err => {});
    axios
      .get(this.state.moviesUrl)
      .then(res => {
        this.setState({ movies: res.data });
        console.log(res.data);
      })
      .catch(err => {});
  }
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }
  deleteWatches(props) {
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
      .put(this.state.deletetowatches, datas, {
        headers: { "Content-Type": "application/json" }
      })
      .then(obj => {
        console.log("Congrats movie succesfully deleted.");
        //  console.log(obj.data);
      })
      .catch(err => {
        console.log(
          "asdlaffgjdhterjdghfkjgdhfgjdhftejlrdhgjhfdgjdkghdjgdhgdjgkdhgj"
        );
        console.log(err);
        console.log(
          "asdlaffgjdhterjdghfkjgdhfgjdhftejlrdhgjhfdgjdkghdjgdhgdjgkdhgj"
        );
      });
  }
  render() {
    var _sizes = { width: "auto" };

    return (
      <div>
        <NavBar name="ali123"></NavBar>
        <div className="container">
          <div className="row">
            <br />
          </div>{" "}
          <div className="row">
            <h3 style={{ color: "#28a745" }}>Watches </h3>
            <br />
          </div>{" "}
          <div className="row" style={{ aling: "center" }}>
            <rb.CardColumns>
              {" "}
              {this.state.watch.map(item => (
                <rb.Card style={_sizes} border="success" bg="secondary">
                  <center>
                    <rb.Card.Img style={_sizes} src={item.photoUrl} />
                  </center>
                  <rb.Card.Body>
                    <rb.Card.Title>{item.name} </rb.Card.Title>
                    <rb.Card.Text>Genre: {item.genre}</rb.Card.Text>
                  </rb.Card.Body>
                  <rb.Card.Footer>
                    <rb.ButtonGroup>
                      <rb.Button
                        crossOrigin
                        onClick={() =>
                          this.props.history.push({
                            pathname: "/User/Movie/Detail",
                            state: { detail: item }
                          })
                        }
                      >
                        More Details
                      </rb.Button>
                      <rb.Button onClick={() => this.deleteWatches(item)}>
                        Remove
                      </rb.Button>
                    </rb.ButtonGroup>
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

export default Watches;
