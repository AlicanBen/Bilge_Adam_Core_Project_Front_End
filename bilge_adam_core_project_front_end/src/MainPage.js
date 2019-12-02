import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./assets/css/bootstrap.min.css";
export default class MainPage extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }
  render() {
    return (
      <div className="container">
        <br></br>
        <div className="row"></div>
        <div className="row ">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="jumbotron">
              <h1 className="display-4">Movie Tracker</h1>
              <p className="lead">
                Movie tracker is a kind of movie review application.{" "}
              </p>
              <hr className="my-4 r" />
              <p>It was created by Asp.Net Core and React.</p>
              <a
                className="btn btn-primary btn-lg"
                href="/SignUp"
                role="button"
              >
                Sign Up
              </a>
              <br />
              <br />
              <a className="btn btn-primary btn-lg" href="/Login" role="button">
                Login
              </a>
            </div>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    );
  }
}
