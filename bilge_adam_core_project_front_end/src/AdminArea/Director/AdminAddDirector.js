import React from "react";
import { NavBar } from "../Components/ComponentIndex";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import axios from "axios";
import { Cookies } from "react-cookie";
import * as rb from "react-bootstrap";
class AdminAddDirector extends React.Component {
  constructor(props) {
    super(props);
    const cookie = new Cookies();
    var data = JSON.parse(atob(cookie.get("properties")));
    this.state = {
      addDirector: apiUrl + "Director/Add",
      isDelete: false
    };

    this.addDirector = this.addDirector.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  addDirector(props) {
    let data = {
      birthDate: this.state.birthDate,
      birthPlace: this.state.birthPlace,
      details: this.state.details,
      isDelete: this.state.isDelete,
      name: this.state.name,
      photoUrl: this.state.photoUrl,
      surname: this.state.surname
    };
    console.log(data);
    axios
      .post(this.state.addDirector, data)
      .then(obj => {})
      .catch(err => {
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
          <NavBar></NavBar>
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
                <rb.Form.Group controlId="BirthDate">
                  <rb.Form.Label>
                    <h4>Birth Date</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    type="date"
                    placeholder="Birth Date"
                    name="birthDate"
                    onChange={this.handleInputChange}
                  />
                </rb.Form.Group>
                <rb.Form.Group controlId="BirthPlace">
                  <rb.Form.Label>
                    <h4>Birth Place</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    type="text"
                    placeholder="Birth Place"
                    name="birthPlace"
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
                <rb.Button variant="primary" onClick={() => this.addDirector()}>
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

export default AdminAddDirector;
