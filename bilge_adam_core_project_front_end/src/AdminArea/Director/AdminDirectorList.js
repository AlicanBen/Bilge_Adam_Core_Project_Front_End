import React from "react";
import { DirectorList, NavBar } from "../Components/ComponentIndex";

import * as rb from "react-bootstrap";
class AdminDirectorList extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }

  render() {
    return (
      <div>
        <div>
          <NavBar></NavBar>
        </div>
        <br />
        <DirectorList table="directorlist"></DirectorList>
      </div>
    );
  }
}

export default AdminDirectorList;
