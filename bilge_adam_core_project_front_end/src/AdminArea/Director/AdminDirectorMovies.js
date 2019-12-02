import React from "react";
import { MovieList, NavBar } from "../Components/ComponentIndex";

class AdminDirectorMovies extends React.Component {
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
        <MovieList></MovieList>
      </div>
    );
  }
}

export default AdminDirectorMovies;
