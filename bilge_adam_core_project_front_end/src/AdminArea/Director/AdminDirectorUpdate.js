import React from "react";
import { NavBar } from "../Components/ComponentIndex";
import * as rb from "react-bootstrap";
class AdminDirectorUpdate extends React.Component {
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
                <rb.Form.Group controlId="Surname">
                  <rb.Form.Label>
                    <h4>Surname</h4>
                  </rb.Form.Label>
                  <rb.Form.Control type="text" placeholder="Surname" />
                </rb.Form.Group>
                <rb.Form.Group controlId="Username">
                  <rb.Form.Label>
                    <h4>Birth Date</h4>
                  </rb.Form.Label>
                  <rb.Form.Control type="date" placeholder="Birth Date" />
                </rb.Form.Group>
                <rb.Form.Group controlId="BirthPlace">
                  <rb.Form.Label>
                    <h4>Birth Place</h4>
                  </rb.Form.Label>
                  <rb.Form.Control type="text" placeholder="Birth Place" />
                </rb.Form.Group>
                <rb.Button variant="primary" type="submit">
                  Update
                </rb.Button>
              </rb.Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AdminDirectorUpdate;
