import React from "react";
import { NavBar, MovieDetailComponent } from "../UserAreaComponentIndex";

class MovieDetail extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }
  render() {
    return (
      <div>
        <NavBar name="ali123"></NavBar>
        <MovieDetailComponent
          movieData={this.props.location.state.detail}
        ></MovieDetailComponent>
      </div>
    );
  }
}
export default MovieDetail;
