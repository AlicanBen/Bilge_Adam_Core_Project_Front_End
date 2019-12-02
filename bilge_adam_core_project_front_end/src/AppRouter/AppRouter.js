import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "../MainPage";
import Login from "../Login";
import SignUp from "../SignUp";
import AdminHome from "../AdminArea/AdminHome";
import {
  AdminUserList,
  AdminAddUser,
  AdminUserUpdate
} from "../AdminArea/User/UserIndex";
import {
  AdminDirectorList,
  AdminAddDirector,
  AdminDirectorMovies,
  AdminDirectorUpdate
} from "../AdminArea/Director/DirectorIndex";
import {
  AdminMovieList,
  AdminAddMovie,
  AdminMovieUpdate,
  AdminMoviesDirector
} from "../AdminArea/Movie/MovieIndex";
import {
  UserHome,
  Favs,
  Watches,
  DirectorDetail,
  MovieDetail,
  Movies,
  UserUpdate,
  Directors
} from "../UserArea/UserAreaIndex";

const AppRouter = () => (
  <BrowserRouter>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/Login" component={Login} />
    <Route exact path="/SignUp" component={SignUp} />

    {/* Admin Areas  start*/}
    <Route exact path="/Admin" component={AdminHome} />

    <Route exact path="/Admin/User" component={AdminUserList} />
    <Route exact path="/Admin/User/Add" component={AdminAddUser} />
    <Route exact path="/Admin/User/Update" component={AdminUserUpdate} />

    <Route exact path="/Admin/Director" component={AdminDirectorList} />
    <Route exact path="/Admin/Director/Add" component={AdminAddDirector} />
    <Route
      exact
      path="/Admin/Director/Movies"
      component={AdminDirectorMovies}
    />
    <Route
      exact
      path="/Admin/Director/Update"
      component={AdminDirectorUpdate}
    />

    <Route exact path="/Admin/Movie" component={AdminMovieList} />
    <Route exact path="/Admin/Movie/Add" component={AdminAddMovie} />
    <Route exact path="/Admin/Movie/Update" component={AdminMovieUpdate} />
    <Route exact path="/Admin/Movie/Director" component={AdminMoviesDirector} />
    {/* Admin Areas end */}

    {/* User Areas Start */}
    <Route exact path="/User" component={UserHome} />
    <Route exact path="/User/Favs" component={Favs} />
    <Route exact path="/User/Watches" component={Watches} />
    <Route exact path="/User/Update" component={UserUpdate} />
    <Route exact path="/User/Movies" component={Movies} />
    <Route exact path="/User/Movie/Detail" component={MovieDetail} />
    <Route exact path="/User/Directors" component={Directors} />
    <Route exact path="/User/Director/Detail" component={DirectorDetail} />
    {/* User Areas end */}
  </BrowserRouter>
);
export default AppRouter;
