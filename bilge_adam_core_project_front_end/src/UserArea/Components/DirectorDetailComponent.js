import React from "react";
import * as rb from "react-bootstrap";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import axios from "axios";
import { MovieList } from "../UserAreaComponentIndex";
class DirectorDetailComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      directorUrl: apiUrl + "Director/DirectorMovies/" + this.props.datas.id,
      directormovies: []
    };
    axios
      .get(this.state.directorUrl)
      .then(res => {
        this.setState({ directormovies: res.data });
        console.log(res.data);
      })
      .catch(err => {});
  }
  render() {
    return (
      <rb.Container className="yellow" style={{ color: "#28a745" }}>
        <rb.Row>
          <br />
        </rb.Row>
        <rb.Row>
          <rb.Col xs={6} md={4}>
            <img
              className="responsive"
              src={this.props.datas.photoUrl}
              alt="First slide"
              rounded
            />
          </rb.Col>
          <rb.Col xs={6} md={8}>
            <h2>Director</h2>
            <p>Birth Date :{" " + this.props.datas.birthDate}</p>
            <p>Birth Place :{" " + this.props.datas.birthPlace}</p>
            <h3>Details</h3>
            <br />
            <p> {this.props.datas.details}</p>
          </rb.Col>
        </rb.Row>
        <br></br>
        <rb.Row>
          <rb.Col xs={6} md={12}>
            {" "}
            <br />
            <MovieList list={this.state.directormovies}></MovieList>
          </rb.Col>
        </rb.Row>
      </rb.Container>
    );
  }
}

export default DirectorDetailComponent;
