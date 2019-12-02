import React from "react";
import * as rb from "react-bootstrap";
import "../../assets/css/style.css";
import { UserList, DirectorList, MovieList } from "./ComponentIndex";
import { Cookies } from "react-cookie";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import axios from "axios";

class AdminHomeContent extends React.Component {
  constructor(props) {
    super(props);
    const cookie = new Cookies();
    var data = JSON.parse(atob(cookie.get("properties")));
    this.state = {
      userUrl: apiUrl + "User",
      movieUrl: apiUrl + "Movie",
      directorUrl: apiUrl + "Director",
      movies: [],
      directors: [],
      users: []
    };
  }
  componentDidMount() {
    axios
      .get(this.state.userUrl)
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(this.state.movieUrl)
      .then(res => {
        this.setState({ movies: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(this.state.directorUrl)
      .then(res => {
        this.setState({ directors: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    var releaseDate = new Date();
    return (
      <div className="container" style={{ color: "#28a745" }}>
        <div className="row">
          <br />
        </div>
        <div className="row">
          <div className="col-md-12">
            {" "}
            <rb.Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
              <rb.Tab eventKey="home" title="Last Users">
                <div className="container">
                  <div className="row">
                    <h3 style={{ color: "#28a745" }}>USERS</h3>
                    <rb.Table striped bordered hover variant="dark">
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Username</th>
                          <th>E-Mail</th>
                          <th>Deleted</th>
                          <th>Admin</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.users.map(items => (
                          <tr>
                            <td>{items.name}</td>
                            <td>{items.surname}</td>
                            <td>{items.username}</td>
                            <td>{items.mail}</td>
                            <td>{items.isDelete ? "true" : "false"}</td>
                            <td>{items.isAdmin ? "true" : "false"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </rb.Table>
                  </div>
                </div>
              </rb.Tab>
              <rb.Tab eventKey="profile" title="Last Movies">
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
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.movies.map(items => (
                          <tr>
                            <td>{items.name}</td>
                            <td>{items.genre}</td>
                            <td>{items.duration}</td>
                            <td>{items.releaseDate}</td>
                            <td>{items.imdbRating}</td>
                            <td>{items.isDelete ? "true" : "false"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </rb.Table>
                  </div>
                </div>
              </rb.Tab>
              <rb.Tab eventKey="contact" title="Last Directors">
                <div className="container">
                  <div className="row">
                    <h3 style={{ color: "#28a745" }}>DIRECTORS</h3>
                    <rb.Table striped bordered hover variant="dark">
                      <thead>
                        <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Birth Date</th>
                          <th>Birth Place</th>
                          <th>Is Deleted</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.directors.map(items => (
                          <tr>
                            <td>{items.name}</td>
                            <td>{items.surname}</td>
                            <td>{items.birthDate}</td>
                            <td>{items.birthPlace}</td>
                            <td>{items.isDelete ? "true" : "false"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </rb.Table>
                  </div>
                </div>
              </rb.Tab>
            </rb.Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminHomeContent;
