import React from "react";
import * as rb from "react-bootstrap";
import { Cookies } from "react-cookie";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import axios from "axios";
class MovieList extends React.Component {
  constructor(props) {
    super(props);
    const cookie = new Cookies();
    var data = JSON.parse(atob(cookie.get("properties")));
    this.state = {
      moviesUrl: apiUrl + "Movie",
      deleteMovie: apiUrl + "Movie/Delete",
      movies: []
    };
    this.deleteMovie = this.deleteMovie.bind(this);
  }
  componentDidMount() {
    axios
      .get(this.state.moviesUrl)
      .then(res => {
        this.setState({ movies: res.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  deleteMovie(props) {
    console.log(this.state.movies);

    var datas = {
      dateOfAdd: props.dateOfAdd,
      details: props.details,
      duration: props.duration,
      genre: props.genre,
      id: props.id,
      imdbRating: props.imdbRating,
      isDelete: props.isDelete,
      name: props.name,
      photoUrl: props.photoUrl,
      releaseDate: props.releaseDate
    };

    console.log("data =>", datas);
    console.log("props =>", props);
    axios
      .put(this.state.deleteMovie, datas, {
        headers: { "Content-Type": "application/json" }
      })
      .then(res => this.componentDidMount)

      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 style={{ color: "#28a745" }}>Movies</h3>
          <rb.Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Genre</th>
                <th>Duration</th>
                <th>Release Date</th>
                <th>Imdb Rating</th>
                <th>Is Delete</th>
                <th>
                  <rb.Button href="/Admin/Movie/Add">Add Movie</rb.Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map(items => (
                <tr>
                  {" "}
                  <td>{items.name}</td>
                  <td>{items.genre}</td>
                  <td>{items.duration}</td>
                  <td>{items.releaseDate}</td>
                  <td>{items.imdbRating}</td>
                  <td>{items.isDelete ? "true" : "false"}</td>
                  <td>
                    &nbsp;
                    <rb.ButtonGroup>
                      <rb.Button variant="secondary" href="/Admin/Movie/Update">
                        Update
                      </rb.Button>
                      <rb.Button
                        variant="secondary"
                        onClick={() => this.deleteMovie(items)}
                      >
                        Delete
                      </rb.Button>
                    </rb.ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </rb.Table>
        </div>
      </div>
    );
  }
}

export default MovieList;
