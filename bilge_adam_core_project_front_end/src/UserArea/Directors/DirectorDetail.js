import React from "react";
import axios from "axios";
import { NavBar, DirectorDetailComponent } from "../UserAreaComponentIndex";

class DirectorDetail extends React.Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#212F3D";
  }
  render() {
    return (
      <div>
        <NavBar name="ali123"></NavBar>
        <DirectorDetailComponent
          datas={this.props.location.state.detail}
        ></DirectorDetailComponent>
      </div>
    );
  }
}

export default DirectorDetail;
