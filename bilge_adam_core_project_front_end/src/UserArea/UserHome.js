import React from "react";
import { NavBar, UserHomeContent } from "./UserAreaComponentIndex";
import axios from "axios";

class UserHome extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <UserHomeContent></UserHomeContent>
      </div>
    );
  }
}

export default UserHome;
