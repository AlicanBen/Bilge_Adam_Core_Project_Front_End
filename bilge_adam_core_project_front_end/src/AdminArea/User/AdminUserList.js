import React from "react";
import { UserList, NavBar } from "../Components/ComponentIndex";
import { Cookies } from "react-cookie";
import { apiUrl } from "../../ShearedFunctions/axiosFunc";
import axios from "axios";
class AdminUserList extends React.Component {
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
        <UserList> </UserList>
      </div>
    );
  }
}

export default AdminUserList;
