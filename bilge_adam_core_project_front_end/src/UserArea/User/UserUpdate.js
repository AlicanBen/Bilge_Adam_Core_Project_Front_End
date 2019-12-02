import React from "react";
import { NavBar } from "../UserAreaComponentIndex";
import UserUpdateComp from "../../SharedComponents/UserUpdateComp";
class UserUpdate extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }
  render() {
    return (
      <div>
        <NavBar name="ali123"></NavBar>
        <br />
        <br />
        <UserUpdateComp role="user"></UserUpdateComp>
      </div>
    );
  }
}

export default UserUpdate;
