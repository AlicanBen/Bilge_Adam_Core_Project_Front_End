import React from "react";
import * as rb from "react-bootstrap";
import "../../assets/css/style.css";
class MovieDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: this.props.movieData
    };
    console.log(this.props.movieData);
  }
  render() {
    var releaseDate = new Date(this.state.movie.releaseDate);
    return (
      <rb.Container className="yellow" style={{ color: "#28a745" }}>
        <rb.Row>
          <br />
        </rb.Row>
        <rb.Row>
          <rb.Col xs={6} md={4}>
            <img
              className="responsive"
              src={this.state.movie.photoUrl}
              alt="First slide"
              rounded
            />
          </rb.Col>
          <rb.Col xs={6} md={8}>
            <h2>{this.state.movie.name}</h2>
            <p>Genre :{" " + this.state.movie.genre}</p>
            <p>Duration :{" " + this.state.movie.duration}</p>
            <p> Directors :{" " + this.state.movie.directors}</p>
            <p>
              Release Date :
              {" " +
                releaseDate.getFullYear() +
                "-0" +
                (releaseDate.getMonth() + 1) +
                "-" +
                releaseDate.getDate()}
            </p>
            <p> Imdb rating : {" " + this.state.movie.imdbRating}</p>
          </rb.Col>
        </rb.Row>
        <br></br>
        <rb.Row>
          <rb.Col xs={6} md={12}>
            <h3>Details</h3>
            <br />
            <p>{" " + this.state.movie.details}</p>
          </rb.Col>
        </rb.Row>
      </rb.Container>
    );
  }
}

export default MovieDetailComponent;
