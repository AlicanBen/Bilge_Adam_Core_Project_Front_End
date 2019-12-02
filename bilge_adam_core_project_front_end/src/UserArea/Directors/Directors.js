import React from "react";
import { NavBar } from "../UserAreaComponentIndex";
import * as rb from "react-bootstrap";
import axios from "axios";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import { Cookies } from "react-cookie";
import "../../assets/css/style.css";

class Director extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directorUrl: apiUrl + "Director",
      director: []
    };
    axios
      .get(this.state.directorUrl)
      .then(res => {
        this.setState({ director: res.data });
        console.log(res.data);
      })
      .catch(err => {});
  }
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="container">
          <div className="row">
            <br />
          </div>{" "}
          <div className="row" style={{ aling: "center" }}>
            <h3 style={{ color: "#28a745" }}>Directors </h3>{" "}
          </div>{" "}
          <div className="row" style={{ aling: "center" }}>
            <rb.CardColumns>
              {" "}
              {this.state.director.map(item => (
                <rb.Card
                  style={{ width: "auto" }}
                  border="success"
                  bg="secondary"
                >
                  <center>
                    <rb.Card.Img
                      style={{ width: "auto" }}
                      src={item.photoUrl}
                    />
                  </center>
                  <rb.Card.Body>
                    <rb.Card.Title>
                      {item.name + " " + item.surname}{" "}
                    </rb.Card.Title>
                    <rb.Card.Text>Genre: {item.genre}</rb.Card.Text>
                  </rb.Card.Body>
                  <rb.Card.Footer>
                    <rb.ButtonGroup>
                      <rb.Button
                        crossOrigin
                        onClick={() =>
                          this.props.history.push({
                            pathname: "/User/Director/Detail",
                            state: { detail: item }
                          })
                        }
                      >
                        More Details
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

export default Director;
