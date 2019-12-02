import React from "react";
import { Cookies } from "react-cookie";
import * as rb from "react-bootstrap";
import "../../assets/css/style.css";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import axios from "axios";
class UserHomeContent extends React.Component {
  constructor(props) {
    super(props);
    const cookie = new Cookies();
    var data = JSON.parse(atob(cookie.get("properties")));
    this.state = {
      watchUrl: apiUrl + "User/GetUserWatches/" + data.id,
      favUrl: apiUrl + "User/GetUserFavs/" + data.id,
      watches: [],
      favs: []
    };
  }
  componentDidMount() {
    axios
      .get(this.state.watchUrl)
      .then(res => {
        this.setState({ watches: res.data });
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(this.state.favUrl)
      .then(res => {
        this.setState({ favs: res.data });
        console.log("FAV :" + JSON.stringify(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container" style={{ color: "#28a745" }}>
        <div className="row">
          <br />
        </div>
        <div className="row">
          <div className="col-md-12">
            {" "}
            <rb.Tabs
              defaultActiveKey="lastMovies"
              id="uncontrolled-tab-example"
            >
              <rb.Tab id="Favorites" eventKey="Favorites" title="Favorites">
                <rb.Tab.Container id="list-group-tabs-example">
                  <br />
                  <rb.Row>
                    <rb.Col sm={4}>
                      <rb.ListGroup>
                        {this.state.favs.map(item => (
                          <rb.ListGroup.Item
                            variant="secondary"
                            action
                            href={"#" + item.name}
                          >
                            {item.name}
                          </rb.ListGroup.Item>
                        ))}
                      </rb.ListGroup>
                    </rb.Col>
                    <rb.Col sm={8}>
                      <rb.Tab.Content>
                        {this.state.favs.map(item => (
                          <rb.Tab.Pane eventKey={"#" + item.name}>
                            {item.details}
                          </rb.Tab.Pane>
                        ))}
                      </rb.Tab.Content>
                    </rb.Col>
                  </rb.Row>
                </rb.Tab.Container>
              </rb.Tab>

              <rb.Tab id="Watched" eventKey="Watched" title="Watched">
                <rb.Tab.Container id="list-group-tabs-example">
                  <br />
                  <rb.Row>
                    <rb.Col sm={4}>
                      <rb.ListGroup>
                        {this.state.watches.map(item => (
                          <rb.ListGroup.Item
                            variant="secondary"
                            action
                            href={"#" + item.name}
                          >
                            {item.name}
                          </rb.ListGroup.Item>
                        ))}
                      </rb.ListGroup>
                    </rb.Col>
                    <rb.Col sm={8}>
                      <rb.Tab.Content>
                        {this.state.watches.map(item => (
                          <rb.Tab.Pane eventKey={"#" + item.name}>
                            {item.details}
                          </rb.Tab.Pane>
                        ))}
                      </rb.Tab.Content>
                    </rb.Col>
                  </rb.Row>
                </rb.Tab.Container>
              </rb.Tab>
            </rb.Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default UserHomeContent;
