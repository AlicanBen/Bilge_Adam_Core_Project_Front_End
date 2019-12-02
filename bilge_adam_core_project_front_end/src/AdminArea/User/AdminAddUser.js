import React from "react";
import { NavBar } from "../Components/ComponentIndex";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import axios from "axios";
import { Cookies } from "react-cookie";
import * as rb from "react-bootstrap";
class AdminAddUser extends React.Component {
  constructor(props) {
    super(props);
    const cookie = new Cookies();
    var data = JSON.parse(atob(cookie.get("properties")));
    this.state = {
      addUser: apiUrl + "User/AddUser",
      isDelete: false,
      isAdmin: false
    };

    this.addUser = this.addUser.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  addUser(props) {
    axios
      .post(this.state.addUser, {
        isAdmin: this.state.isAdmin,
        isDelete: this.state.isDelete,
        mail: this.state.mail,
        name: this.state.name,
        password: this.state.password,
        surname: this.state.surname,
        username: this.state.username
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
                <div key="checkbox-1" className="mb-3">
                  <input
                    type="checkbox"
                    name="isAdmin"
                    checked={this.state.isAdmin}
                    onChange={this.handleCheckboxChange}
                  ></input>
                  <label>&nbsp;Is Admin</label>
                </div>
                <div key="checkbox-2" className="mb-3">
                  <input
                    type="checkbox"
                    name="isDelete"
                    checked={this.state.isDelete}
                    onChange={this.handleCheckboxChange}
                  ></input>
                  <label>&nbsp;Is Delete</label>
                </div>
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

export default AdminAddUser;
