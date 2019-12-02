import React from "react";
import * as rb from "react-bootstrap";
import "../../assets/css/style.css";
class UserCards extends React.Component {
  render() {
    var cardTitle;
    var button;
    var button2;
    var link;
    var _sizes;

    if (this.props.sizes === "sm") {
      _sizes = { width: "67 %" };
    } else {
      _sizes = { width: "auto" };
    }
    if (this.props.type === "favorite") {
      cardTitle = this.props.values.name;
      link = "Movie";
      button = <rb.Button>Remove</rb.Button>;
    } else if (this.props.type === "watch") {
      cardTitle = "Watches";

      link = "Movie";

      button = <rb.Button>Remove</rb.Button>;
    } else if (this.props.type === "movie") {
      cardTitle = "Movies";
      link = "Movie";
      button = <rb.Button>Add Fav</rb.Button>;
      button2 = <rb.Button>Add Watch</rb.Button>;
    } else if (this.props.type === "director") {
      cardTitle = "Directors";
      link = "Director";
    }
    return (
      <div className="container">
        <div className="row">
          <br />
        </div>{" "}
        <div className="row" style={{ aling: "center" }}>
          <h3 style={{ color: "#28a745" }}>{cardTitle} </h3>

          <rb.CardColumns>
            {" "}
            {this.props.values.map(item => (
              <rb.Card style={_sizes} border="success" bg="secondary">
                <center>
                  <rb.Card.Img style={_sizes} src={require(item.photoUrl)} />
                </center>
                <rb.Card.Body>
                  <rb.Card.Title>{item.name} </rb.Card.Title>
                  <rb.Card.Text>Genre: {item.genre}</rb.Card.Text>
                </rb.Card.Body>
                <rb.Card.Footer>
                  <rb.ButtonGroup>
                    <rb.Button href={"/" + link + "/Details"}>
                      More Details
                    </rb.Button>
                    {button}
                    {button2}{" "}
                  </rb.ButtonGroup>
                </rb.Card.Footer>
              </rb.Card>
            ))}
          </rb.CardColumns>
        </div>
      </div>
    );
  }
}

export default UserCards;
