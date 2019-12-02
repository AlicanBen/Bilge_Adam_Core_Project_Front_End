import React from "react";
import { NavBar } from "../Components/ComponentIndex";
import * as rb from "react-bootstrap";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import axios from "axios";
import { Cookies } from "react-cookie";
class AdminAddMovie extends React.Component {
  constructor(props) {
    super(props);
    const cookie = new Cookies();
    var data = JSON.parse(atob(cookie.get("properties")));
    this.state = {
      addMovie: apiUrl + "Movie/AddMovie",
      directorUrl: apiUrl + "Director",
      director: [],
      moviedirector: [],
      isDelete: false
    };

    this.addMovie = this.addMovie.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  addMovie(props) {
    let data = {
      details: this.state.details,
      duration: this.state.duration,
      genre: this.state.genre,
      imdbRating: this.state.imdbRating,
      isDelete: this.state.isDelete,
      name: this.state.name,
      photoUrl: this.state.photoUrl,
      releaseDate: this.state.releaseDate,
      directors: this.state.directors
    };
    console.log(data);
    axios
      .post(this.state.addMovie, data)
      .then()
      .catch(err => {
        console.log(err);
      });
  }
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
    axios
      .get(this.state.directorUrl)
      .then(res => {
        this.setState({ director: res.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log([event.target.name] + ":" + event.target.value);
  }
  handleCheckboxChange(event) {
    this.setState({ [event.target.name]: event.target.checked });
    console.log([event.target.name], ":", event.target.checked);
  }
  handleSelectChange(event) {
    this.setState({
      moviedirector: this.state.moviedirector.concat([event.target])
    });
    console.log("moviedirector :", event.target.checked);
  }

  render() {
    return (
      <div>
        <div>
          <NavBar name="ali123"></NavBar>
        </div>
        <br />
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <rb.Form style={{ color: "#28a745" }}>
                <rb.Form.Group controlId="Name">
                  <rb.Form.Label>
                    <h4>Name</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={this.handleInputChange}
                  />
                </rb.Form.Group>
                <rb.Form.Group controlId="Genre">
                  <rb.Form.Label>
                    <h4>Genre</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    type="text"
                    placeholder="Genre"
                    name="genre"
                    onChange={this.handleInputChange}
                  />
                </rb.Form.Group>
                <rb.Form.Group controlId="Duration">
                  <rb.Form.Label>
                    <h4>Duration</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    type="text"
                    placeholder="Duration"
                    name="duration"
                    onChange={this.handleInputChange}
                  />
                </rb.Form.Group>
                <rb.Form.Group controlId="ReleaseDate">
                  <rb.Form.Label>
                    <h4>Release Date</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    type="date"
                    placeholder="Release Date"
                    name="releaseDate"
                    onChange={this.handleInputChange}
                  />
                </rb.Form.Group>
                <rb.Form.Group controlId="ImdbRating">
                  <rb.Form.Label>
                    <h4>Imdb Rating</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    type="number"
                    step=".1"
                    min="0"
                    max="10"
                    placeholder="ImdbRating"
                    name="imdbRating"
                    onChange={this.handleInputChange}
                  />
                </rb.Form.Group>
                <rb.Form.Group controlId="PhotoUrl">
                  <rb.Form.Label>
                    <h4>Photo Url</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    type="text"
                    placeholder="Photo Url"
                    name="photoUrl"
                    onChange={this.handleInputChange}
                  />
                </rb.Form.Group>
                <rb.Form.Group>
                  <rb.Form.Label>
                    {" "}
                    <h4>Details</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    as="textarea"
                    rows="3"
                    name="details"
                    onChange={this.handleInputChange}
                  />
                </rb.Form.Group>

                <div key="checkbox-2" className="mb-3">
                  <input
                    type="checkbox"
                    name="isDelete"
                    checked={this.state.isDelete}
                    onChange={this.handleCheckboxChange}
                  ></input>
                  <label>&nbsp;Is Delete</label>
                </div>
                <rb.Button variant="primary" onClick={() => this.addMovie()}>
                  Add
                </rb.Button>
              </rb.Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminAddMovie;
