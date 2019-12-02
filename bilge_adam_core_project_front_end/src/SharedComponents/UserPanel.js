import React from "react";
import { Cookies } from "react-cookie";
import * as rb from "react-bootstrap";
class UserPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      isAdmin: undefined,
      username: ""
    };
    this.LogOut = this.LogOut.bind(this);
  }
  LogOut() {
    var cookie = new Cookies();
    cookie.remove("properties");
    cookie.remove("data");
  }
  componentDidMount() {
    const cookie = new Cookies();
    if (cookie === null && cookie === undefined) {
    } else {
      var data = JSON.parse(atob(cookie.get("properties")));
      this.setState({
        username: data.username
      });
    }
  }
  render() {
    let item;
    if (this.props.auth === "user") {
      item = (
        <>
          <rb.NavDropdown.Item href="/User/Update">Update</rb.NavDropdown.Item>
          <rb.NavDropdown.Divider />
        </>
      );
    }
    return (
      <rb.Nav>
        <rb.NavDropdown
          drop="left"
          title={this.state.username}
          pull-left
          id="collasible-nav-dropdown"
        >
          {item}
          <rb.NavDropdown.Item href="/Login">Log Out</rb.NavDropdown.Item>
        </rb.NavDropdown>
      </rb.Nav>
    );
  }
}
export default UserPanel;
