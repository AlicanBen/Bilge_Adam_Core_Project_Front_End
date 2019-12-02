import React, { Component } from "react";
import { Cookies } from "react-cookie";
import { apiUrl } from "./ShearedFunctions/axiosFunc";
import axios from "axios";
import "./assets/css/bootstrap.min.css";
export default class MainPage extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }
  constructor(props) {
    const cookie = new Cookies();

    super(props);
    this.state = {
      userData: [],
      isAdmin: undefined,
      username: "",
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    cookie.remove("properties");
  }
  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  formSubmitHandler(e) {
    const cookie = new Cookies();
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    axios
      .get(apiUrl + "user/GetUserByUserName/" + username)
      .then(res => {
        if (res.data.username === username && res.data.password === password) {
          this.setState({ userData: res.data });
          this.setState({ isAdmin: res.data.isAdmin });
          cookie.set("properties", btoa(JSON.stringify(res.data)));
          // localStorage.setItem();
          this.state.isAdmin === true
            ? this.props.history.push("/admin")
            : this.props.history.push("/user");
        } else {
          this.setState({ userData: undefined });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    console.log(this.state.isAdmin);
    const action =
      this.state.isAdmin === true
        ? "http://localhost:3000/admin"
        : this.state.isAdmin === false
        ? "http://localhost:3000/user"
        : "http://localhost:3000/Login";
    return (
      <div className="container">
        <div className="row">
          <br></br>
          <br></br>
        </div>
        <div className="row">
          <div className="col-2"></div>
          <div
            className="col-8 jumbotron"
            style={{ color: "#28a745", fontWeight: "bold" }}
          >
            <form action={(action, console.log(action))}>
              <div className="form-row ">
                <label htmlFor="validationDefaultUsername">Username</label>
                <br></br>
                <div className="input-group">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    id="validationDefaultUsername"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend2"
                    required
                    onChange={this.handleInputChange}
                  />
                </div>
              </div>{" "}
              <br></br>
              <div className="form-row ">
                <label for="validationDefault04">Password</label>
                <br></br>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="validationDefault04"
                  placeholder="Password"
                  required
                  onChange={this.handleInputChange}
                />
              </div>{" "}
              <br></br>
              <div className="form-group"></div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.formSubmitHandler}
              >
                Login
              </button>
            </form>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    );
  }
}
