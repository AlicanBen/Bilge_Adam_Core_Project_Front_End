import React from "react";
import * as rb from "react-bootstrap";
import { Cookies } from "react-cookie";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import axios from "axios";
class DirectorList extends React.Component {
  constructor(props) {
    super(props);
    const cookie = new Cookies();
    var data = JSON.parse(atob(cookie.get("properties")));
    this.state = {
      directorUrl: apiUrl + "Director",
      deleteDirector: apiUrl + "Director/Delete",
      directors: []
    };

    this.deleteDirector = this.deleteDirector.bind(this);
  }
  componentDidMount() {
    axios
      .get(this.state.directorUrl)
      .then(res => {
        this.setState({ directors: res.data });

        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }
  deleteDirector(props) {
    console.log(this.state.directors);

    var datas = {
      birthDate: props.birthDate,
      birthPlace: props.birthPlace,
      dateOfAdd: props.dateOfAdd,
      details: props.details,
      id: props.id,
      isDelete: props.isDelete,
      name: props.name,
      photoUrl: props.photoUrl,
      surname: props.surname
    };

    console.log("data =>", datas);
    console.log("props =>", props);
    axios
      .put(this.state.deleteDirector, datas, {
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
          <h3 style={{ color: "#28a745" }}>DIRECTORS</h3>
          <rb.Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birth Date</th>
                <th>Birth Place</th>
                <th>Is Deleted</th>
                <th>
                  <rb.Button href="/Admin/Director/Add">Add Director</rb.Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.directors.map(item => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.surname}</td>
                  <td>{item.birthDate}</td>
                  <td>{item.birthPlace}</td>
                  <td>{item.isDelete ? "true" : "false"}</td>
                  <td>
                    &nbsp;
                    <rb.ButtonGroup>
                      <rb.Button
                        variant="secondary"
                        href="/Admin/Director/Update"
                      >
                        Update
                      </rb.Button>
                      <rb.Button
                        variant="secondary"
                        onClick={() => this.deleteDirector(item)}
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

export default DirectorList;
