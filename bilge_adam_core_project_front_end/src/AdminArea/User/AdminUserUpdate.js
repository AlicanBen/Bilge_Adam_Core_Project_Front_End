import React from "react";
import { NavBar } from "../Components/ComponentIndex";
import UserUpdateComp from "../../SharedComponents/UserUpdateComp";
import * as rb from "react-bootstrap";
class AdminUserUpdate extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }

  render() {
    return (
      <div>
        <div>
          <NavBar name="ali123"></NavBar>
          <UserUpdateComp role="admin"></UserUpdateComp>
          <hr></hr>
        </div>
        <br />
      </div>
    );
  }
}

export default AdminUserUpdate;
