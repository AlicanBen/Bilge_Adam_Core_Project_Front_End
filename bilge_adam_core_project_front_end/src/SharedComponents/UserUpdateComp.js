import React from "react";
import { Cookies } from "react-cookie";
import * as rb from "react-bootstrap";
import axios from "axios";
import { apiUrl } from "../ShearedFunctions/axiosFunc";
import { Redirect } from "react-router-dom";
class UserUpdateComp extends React.Component {
  constructor(props) {
    super(props);
    const cookie = new Cookies();
    var data = JSON.parse(atob(cookie.get("properties")));
    this.state = {
      updateUrl: apiUrl + "User/UpdateUser",
      id: data.id,
      name: data.name,
      surname: data.surname,
      username: data.username,
      dateOfAdd: data.dateOfAdd,
      isAdmin: data.isAdmin,
      mail: data.mail,
      password: data.password,
      data: data,
      isChecked: data.isDelete
    };
    console.log(data);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.UpdateUser = this.UpdateUser.bind(this);
  }
  LogOut(props) {
    var cookie = new Cookies();
    cookie.remove("properties");
    cookie.remove("data");
  }

  UpdateUser() {
    let updatedUser = {
      id: this.state.id,
      name: this.state.name,
      surname: this.state.surname,
      username: this.state.username,
      dateOfAdd: this.state.dateOfAdd,
      isAdmin: this.state.isAdmin,
      isDelete: this.state.isDelete,
      mail: this.state.mail,
      password: this.state.newPass
    };
    console.log(updatedUser);
    console.log("datas:", this.state.data);

    if (this.state.password === this.state.oldPass) {
      console.log("asdfg");
      axios
        .put(this.state.updateUrl, updatedUser, {
          headers: { "Content-Type": "application/json" }
        })
        .then(obj => {
          this.setState({
            resultMessage: "Congrats user succesfully updated."
          });

          if (updatedUser.isDelete === true) {
            this.LogOut();
            this.props.history.push("/Login");
          }
        })
        .catch(err => {
          this.setState({ resultMessage: "I found some error." });
          console.log(err);
        });
    } else {
    }
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    console.log([event.target.name] + ":" + event.target.value);
  }
  handleCheckboxChange(event) {
    const value = event.target.checked;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
    console.log(name, ":", value);
  }
  render() {
    var isAdmin;
    var username;
    var oldPass;
    var newPass;
    if (this.props.role === "admin") {
      isAdmin = (
        <div key="checkbox-1" className="mb-3">
          <rb.Form.Check type="checkbox" id="check-api-checkbox-1">
            <rb.Form.Check.Input type="checkbox" isValid />
            <rb.Form.Check.Label>Admin</rb.Form.Check.Label>
          </rb.Form.Check>
        </div>
      );
      username = <rb.Form.Control type="text" placeholder="Username" />;
    } else if (this.props.role === "user") {
      username = (
        <rb.Form.Control readOnly defaultValue={this.state.username} />
      );
      oldPass = (
        <rb.Form.Group controlId="oldPass">
          <rb.Form.Label>
            <h4>Old Password</h4>
          </rb.Form.Label>
          <rb.Form.Control
            name="oldPass"
            type="password"
            placeholder="Old Password"
            onChange={this.handleInputChange}
          />
        </rb.Form.Group>
      );
      newPass = (
        <rb.Form.Group controlId="newPass">
          <rb.Form.Label>
            <h4>New Password</h4>
          </rb.Form.Label>
          <rb.Form.Control
            name="newPass"
            type="password"
            placeholder="New Password"
            onChange={this.handleInputChange}
          />
        </rb.Form.Group>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg">
            <rb.Form style={{ color: "#28a745" }} method="post">
              <rb.Form.Group controlId="Name">
                <rb.Form.Label>
                  <h4>Name</h4>
                </rb.Form.Label>
                <rb.Form.Control
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={this.state.name}
                  onChange={this.handleInputChange}
                />
              </rb.Form.Group>
              <rb.Form.Group controlId="Surname">
                <rb.Form.Label>
                  <h4>Surname</h4>
                </rb.Form.Label>
                <rb.Form.Control
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  defaultValue={this.state.surname}
                  onChange={this.handleInputChange}
                />
              </rb.Form.Group>
              <rb.Form.Group controlId="Username">
                <rb.Form.Label>
                  <h4>Username</h4>
                </rb.Form.Label>
                {username}
              </rb.Form.Group>
              {oldPass}
              {newPass}
              <rb.Form.Group controlId="email">
                <rb.Form.Label>
                  <h4>Email address</h4>
                </rb.Form.Label>
                <rb.Form.Control
                  type="email"
                  name="mail"
                  onChange={this.handleInputChange}
                  placeholder="Email"
                  defaultValue={this.state.mail}
                />
              </rb.Form.Group>
              {isAdmin}

              <rb.Button variant="primary" onClick={this.UpdateUser}>
                Update
              </rb.Button>
            </rb.Form>
          </div>
        </div>
      </div>
    );
  }
}

export default UserUpdateComp;
