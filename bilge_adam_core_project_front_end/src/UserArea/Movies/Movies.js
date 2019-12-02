import React from "react";
import { NavBar } from "../UserAreaComponentIndex";
import * as rb from "react-bootstrap";
import axios from "axios";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import { Cookies } from "react-cookie";
import "../../assets/css/style.css";
class Movies extends React.Component {
  constructor(props) {
    super(props);
    const cookie = new Cookies();
    var data = JSON.parse(atob(cookie.get("properties")));
    this.state = {
      moviesUrl: apiUrl + "Movie",
      movietofav: apiUrl + "User/AddMovieToFav/" + data.id,
      movietowatch: apiUrl + "User/AddMovieToWatch/" + data.id,
      movies: []
    };
    axios
      .get(this.state.moviesUrl)
      .then(res => {
        this.setState({ movies: res.data });
        console.log(res.data);
      })

      .catch(err => {});
    this.addFav = this.addFav.bind(this);
    this.addWatch = this.addWatch.bind(this);
  }
  addFav(props) {
    axios
      .post(this.state.movietofav, {
        dateOfAdd: props.dateOfAdd,
        details: props.details,
        directors: props.directors,
        duration: props.duration,
        genre: props.genre,
        id: props.id,
        imdbRating: props.imdbRating,
        isDelete: props.isDelete,
        name: props.name,
        photoUrl: props.photoUrl,
        releaseDate: props.releaseDate
      })
      .then(obj => {
        this.setState({ resultMessage: "Congrats movie succesfully added." });
        //  console.log(obj.data);
      })
      .catch(err => {
        this.setState({ resultMessage: "I found some error." });
        console.log(err);
      });
  }
  addWatch(props) {
    axios
      .post(this.state.movietowatch, {
        dateOfAdd: props.dateOfAdd,
        details: props.details,
        directors: props.directors,
        duration: props.duration,
        genre: props.genre,
        id: props.id,
        imdbRating: props.imdbRating,
        isDelete: props.isDelete,
        name: props.name,
        photoUrl: props.photoUrl,
        releaseDate: props.releaseDate
      })
      .then(obj => {
        this.setState({ resultMessage: "Congrats movie succesfully added." });
        //  console.log(obj.data);
      })
      .catch(err => {
        this.setState({ resultMessage: "I found some error." });
        console.log(err);
      });
  }
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
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
            <h3 style={{ color: "#28a745" }}>Movies </h3>
            <br />
          </div>{" "}
          <div className="row" style={{ aling: "center" }}>
            <rb.CardColumns>
              {" "}
              {this.state.movies.map(item => (
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
                      <rb.Button onClick={() => this.addFav(item)}>
                        Add Favs
                      </rb.Button>
                      <rb.Button onClick={() => this.addWatch(item)}>
                        Add Watch
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

export default Movies;
