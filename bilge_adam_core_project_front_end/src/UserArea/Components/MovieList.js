import React from "react";
import * as rb from "react-bootstrap";
class MovieList extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 style={{ color: "#28a745" }}>Movies</h3>
          <rb.Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Name</th>
                <th>Genre</th>
                <th>Duration</th>
                <th>Release Date</th>
                <th>Imdb Rating</th>
              </tr>
            </thead>
            <tbody>
              {this.props.list.map(item => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.genre}</td>
                  <td>{item.duration}</td>
                  <td>{item.releaseDate}</td>
                  <td>{item.imdbRating}</td>
                </tr>
              ))}
            </tbody>
          </rb.Table>
        </div>
      </div>
    );
  }
}

export default MovieList;
