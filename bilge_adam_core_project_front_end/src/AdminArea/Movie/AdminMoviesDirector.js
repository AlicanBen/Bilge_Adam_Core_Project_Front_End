import React from "react";
import { DirectorList, NavBar } from "../Components/ComponentIndex";

class AdminMoviesDirector extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }

  render() {
    return (
      <div>
        <div>
          <NavBar name="ali123"></NavBar>
        </div>
        <br />
        <DirectorList></DirectorList>
      </div>
    );
  }
}

export default AdminMoviesDirector;
