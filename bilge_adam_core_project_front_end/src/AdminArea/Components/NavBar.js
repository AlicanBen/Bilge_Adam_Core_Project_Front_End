import React from "react";
import * as rb from "react-bootstrap";
import { UserPanel } from "./ComponentIndex";
class NavBar extends React.Component {
  render() {
    let items;
    if (true) {
      items = <UserPanel></UserPanel>;
    } else {
      items = (
        <rb.Nav>
          <rb.Button variant="dark" onClick="/Login">
            Login
          </rb.Button>{" "}
        </rb.Nav>
      );
    }
    return (
      <div>
        <rb.Navbar bg="dark" expand="lg" variant="dark">
          <rb.Navbar.Brand href="/Admin">Movie Tracker</rb.Navbar.Brand>{" "}
          <rb.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <rb.Navbar.Collapse id="basic-navbar-nav">
            <rb.Nav className="mr-auto">
              <rb.Nav.Link href="/Admin/User">User</rb.Nav.Link>
              <rb.Nav.Link href="/Admin/Director">Director</rb.Nav.Link>
              <rb.Nav.Link href="/Admin/Movie">Movie</rb.Nav.Link>
            </rb.Nav>
            {items}
          </rb.Navbar.Collapse>
        </rb.Navbar>
      </div>
    );
  }
}

export default NavBar;
