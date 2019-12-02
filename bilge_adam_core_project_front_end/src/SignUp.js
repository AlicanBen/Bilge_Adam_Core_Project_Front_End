import React, { Component } from "react";
import { apiUrl } from "./ShearedFunctions/axiosFunc";
import * as rb from "react-bootstrap";
import axios from "axios";
export default class MainPage extends Component {
  constructor(props) {
    super(props);
    var ur = apiUrl;
    this.state = {
      addUser: ur + "User/AddUser",
      isDelete: false,
      isAdmin: false
    };

    this.addUser = this.addUser.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }
  addUser(props) {
    let data = {
      isAdmin: false,
      isDelete: false,
      mail: this.state.mail,
      name: this.state.name,
      password: this.state.password,
      surname: this.state.surname,
      username: this.state.username
    };
    console.log(data);
    axios
      .post(this.state.addUser, data)
      .then()
      .catch(err => {
        this.setState({ resultMessage: "I found some error." });
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
  render() {
    return (
      <div>
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
                <rb.Form.Group controlId="Surname">
                  <rb.Form.Label>
                    <h4>Surname</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    type="text"
                    placeholder="Surname"
                    name="surname"
                    onChange={this.handleInputChange}
                  />
                </rb.Form.Group>
                <rb.Form.Group controlId="Username">
                  <rb.Form.Label>
                    <h4>Username</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    type="text"
                    placeholder="Username"
                    name="username"
                    onChange={this.handleInputChange}
                  />
                </rb.Form.Group>
                <rb.Form.Group controlId="email">
                  <rb.Form.Label>
                    <h4>Email address</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    type="email"
                    placeholder="Email"
                    name="mail"
                    onChange={this.handleInputChange}
                  />
                  <rb.Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </rb.Form.Text>
                </rb.Form.Group>
                <rb.Form.Group controlId="password">
                  <rb.Form.Label>
                    <h4>Password</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={this.handleInputChange}
                  />
                </rb.Form.Group>

                <rb.Button
                  variant="primary"
                  type="submit"
                  onClick={this.addUser}
                >
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
