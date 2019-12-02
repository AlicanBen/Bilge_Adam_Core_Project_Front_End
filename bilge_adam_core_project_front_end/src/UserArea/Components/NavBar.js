import React from "react";
import * as rb from "react-bootstrap";
import UserPanel from "../../SharedComponents/UserPanel";
class NavBar extends React.Component {
  render() {
    let items;
    if (true) {
      items = <UserPanel name={this.props.name} auth="user"></UserPanel>;
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
          <rb.Navbar.Brand href="/User">Movie Tracker</rb.Navbar.Brand>{" "}
          <rb.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <rb.Navbar.Collapse id="basic-navbar-nav">
            <rb.Nav className="mr-auto">
              <rb.NavDropdown title="User" id="basic-nav-dropdown">
                <rb.NavDropdown.Item href="/User/Favs">
                  Favorites
                </rb.NavDropdown.Item>
                <rb.NavDropdown.Item href="/User/Watches">
                  Watches
                </rb.NavDropdown.Item>
                <rb.NavDropdown.Divider />
                <rb.NavDropdown.Item href="/User/Update">
                  Update
                </rb.NavDropdown.Item>
              </rb.NavDropdown>
              <rb.Nav.Link href="/User/Directors">Directors</rb.Nav.Link>
              <rb.Nav.Link href="/User/Movies">Movies</rb.Nav.Link>
            </rb.Nav>
            {items}
          </rb.Navbar.Collapse>
        </rb.Navbar>
      </div>
    );
  }
}

export default NavBar;
