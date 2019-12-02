import React from "react";
import { AdminHomeContent, NavBar } from "./Components/ComponentIndex";
import axios from "axios";

class Admin extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }
  render() {
    return (
      <div>
        <NavBar name="ali123"></NavBar>
        <AdminHomeContent></AdminHomeContent>
      </div>
    );
  }
}

export default Admin;
