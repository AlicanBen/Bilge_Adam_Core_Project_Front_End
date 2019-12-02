import React from "react";
import { NavBar } from "../Components/ComponentIndex";
import * as rb from "react-bootstrap";
class AdminMovieUpdate extends React.Component {
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
        <div className="container">
          <div className="row">
            <div className="col-lg">
              <rb.Form style={{ color: "#28a745" }}>
                <rb.Form.Group controlId="Name">
                  <rb.Form.Label>
                    <h4>Name</h4>
                  </rb.Form.Label>
                  <rb.Form.Control type="text" placeholder="Name" />
                </rb.Form.Group>
                <rb.Form.Group controlId="Genre">
                  <rb.Form.Label>
                    <h4>Genre</h4>
                  </rb.Form.Label>
                  <rb.Form.Control type="text" placeholder="Genre" />
                </rb.Form.Group>
                <rb.Form.Group controlId="Duration">
                  <rb.Form.Label>
                    <h4>Duration</h4>
                  </rb.Form.Label>
                  <rb.Form.Control type="text" placeholder="Duration" />
                </rb.Form.Group>
                <rb.Form.Group controlId="ReleaseDate">
                  <rb.Form.Label>
                    <h4>Release Date</h4>
                  </rb.Form.Label>
                  <rb.Form.Control type="date" placeholder="Release Date" />
                </rb.Form.Group>
                <rb.Form.Group controlId="ImdbRating">
                  <rb.Form.Label>
                    <h4>Imdb Rating</h4>
                  </rb.Form.Label>
                  <rb.Form.Control
                    type="number"
                    step=".1"
                    min="0"
                    max="10"
                    placeholder="ImdbRating"
                  />
                </rb.Form.Group>
                <div key="checkbox-2" className="mb-3">
                  <rb.Form.Check type="checkbox" id="check-api-checkbox-2">
                    <rb.Form.Check.Input type="checkbox" isValid />
                    <rb.Form.Check.Label>Deleted</rb.Form.Check.Label>
                  </rb.Form.Check>
                </div>
                <rb.Button variant="primary" type="submit">
                  Add
                </rb.Button>
              </rb.Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminMovieUpdate;
