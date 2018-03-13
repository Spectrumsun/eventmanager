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
import PasswordReset from '../User/passwordReset';
import RequireAuth from '../Auth/authHOC';
import IsAdmin from '../Auth/adminHOC';
import EmailCheck from '../User/EmailVerfy';


const routers = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pickcenter" exact component={RequireAuth(pickCenter)} />
    <Route path="/events" exact component={ViewEvents} />
    <Route path="/addevent" exact component={RequireAuth(AddEvent)} />
    <Route path="/events/:id" exact component={EventInfo} />
    <Route path="/events/edit/:id" exact component={RequireAuth(EditEvent)} />
    <Route path="/addcenter" exact component={IsAdmin(AddCenter)} />
    <Route path="/centers" exact component={ViewCenters} />
    <Route path="/centers/:id" exact component={CenterInfo} />
    <Route path="/centers/edit/:id" exact component={IsAdmin(EditCenter)} />
    <Route path="/signup" exact component={Signup} />
    <Route path="/login" exact component={Login} />
    <Route path="/forgotpassword" exact component={ForgotPassword} />
    <Route path="/user/password/reset/:token" exact component={PasswordReset} />
    <Route path="/users/email/:token" exact component={EmailCheck} />
    <Route component={NotFound} />
  </Switch>
);

export default routers;
