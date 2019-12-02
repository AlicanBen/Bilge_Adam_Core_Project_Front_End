import React from "react";
import * as rb from "react-bootstrap";
import { Cookies } from "react-cookie";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import axios from "axios";
class UserList extends React.Component {
  constructor(props) {
    super(props);
    const cookie = new Cookies();
    var data = JSON.parse(atob(cookie.get("properties")));
    this.state = {
      userUrl: apiUrl + "User",
      deleteUser: apiUrl + "User/Delete",
      users: []
    };

    this.deleteUser = this.deleteUser.bind(this);
  }
  componentDidMount() {
    axios
      .get(this.state.userUrl)
      .then(res => {
        this.setState({ users: res.data });
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteUser(props) {
    var datas = {
      name: props.name,
      surname: props.surname,
      username: props.username,
      mail: props.mail,
      id: props.id,
      password: props.password,
      isDelete: props.isDelete,
      isAdmin: props.isAdmin,
      id: props.id,
      dateOfAdd: props.dateOfAdd
    };

    console.log("data =>", datas);
    console.log("props =>", props);
    axios
      .put(this.state.deleteUser, datas, {
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
                <th>
                  {" "}
                  <rb.Button href="/Admin/User/Add">Add User</rb.Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(item => (
                <tr>
                  <td>{item.name}</td>
                  <td> {item.surname}</td>
                  <td>{item.username}</td>
                  <td>{item.mail}</td>
                  <td>{item.isDelete ? "True" : "False"}</td>
                  <td>{item.isAdmin ? "True" : "False"}</td>
                  <td>
                    <rb.ButtonGroup>
                      <rb.Button variant="secondary" href="/Admin/User/Update">
                        Update
                      </rb.Button>
                      <rb.Button
                        variant="secondary"
                        onClick={() => this.deleteUser(item)}
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

export default UserList;
