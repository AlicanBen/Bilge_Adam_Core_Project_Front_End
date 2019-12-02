import React from "react";
import { MovieList, NavBar } from "../Components/ComponentIndex";

class AdminMovieList extends React.Component {
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
        <MovieList table="movielist"></MovieList>
      </div>
    );
  }
}

export default AdminMovieList;
