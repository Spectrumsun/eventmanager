import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../UI/Home';
import Signup from '../User/Signup';
import Login from '../User//Login';
import AddCenter from '../Center/AddCenter';
import ViewCenters from '../Center/ViewCenters';
import AddEvent from '../Event/Addevent';
import ViewEvents from '../Event/ViewEvents';
import CenterInfo from '../Center/CenterInfo';
import EventInfo from '../Event/EventInfo';
import NotFound from '../NotFound';
import ForgotPassword from '../User/ForgotPassword';
import EditCenter from '../Center/EditCenter';
import EditEvent from '../Event/EditEvent';
import pickCenter from '../Center/PickCenter';
import PasswordReset from '../User/PasswordReset';
import RequireAuth from '../Auth/authHOC';
import IsAdmin from '../Auth/adminHOC';
import EmailCheck from '../User/EmailVerify';
import afterLogin from '../Auth/afterLogin';
import addAmin from '../User/addAmin';
import searchCenter from '../Center/SearchCenter';

const routers = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route
      path="/pickcenter"
      exact
      component={RequireAuth(pickCenter)}
    />
    <Route
      path="/searchcenter"
      exact
      component={searchCenter}
    />
    <Route
      path="/events"
      exact
      component={RequireAuth(ViewEvents)}
    />
    <Route
      path="/addevent"
      exact
      component={RequireAuth(AddEvent)}
    />
    <Route
      path="/events/:id"
      exact
      component={RequireAuth(EventInfo)}
    />
    <Route
      path="/events/edit/:id"
      exact
      component={RequireAuth(EditEvent)}
    />
    <Route
      path="/addcenter"
      exact
      component={IsAdmin(AddCenter)}
    />
    <Route
      path="/centers"
      exact
      component={ViewCenters}
    />
    <Route
      path="/centers/:id"
      exact
      component={CenterInfo}
    />
    <Route
      path="/centers/edit/:id"
      exact
      component={IsAdmin(EditCenter)}
    />
    <Route
      path="/signup"
      exact
      component={afterLogin(Signup)}
    />
    <Route
      path="/login"
      exact
      component={afterLogin(Login)}
    />
    <Route
      path="/forgotpassword"
      exact
      component={afterLogin(ForgotPassword)}
    />
    <Route
      path="/user/password/reset/:token"
      exact
      component={afterLogin(PasswordReset)}
    />
    <Route
      path="/users/email/:token"
      exact
      component={EmailCheck}
    />
    <Route
      path="/addadmin"
      exact
      component={IsAdmin(addAmin)}
    />
    <Route component={NotFound} />
  </Switch>
);

export default routers;
