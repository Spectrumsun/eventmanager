import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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
import PasswordRest from '../User/PasswordReset';
import EditCenter from '../Center/EditCenter'


const routers = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/events" exact component={ViewEvents} />
    <Route path="/addevent" exact component={AddEvent} />
    <Route path="/events/:id" exact component={EventInfo} />
    <Route path="/addcenter" exact component={AddCenter} />
    <Route path="/centers" exact component={ViewCenters} />
    <Route path="/centers/:id" exact component={CenterInfo} />
    
    <Route path="/signup" exact component={Signup} />
    <Route path="/login" exact component={Login} />
    <Route path="/passwordreset" exact component={PasswordRest} />
    
    <Route component={NotFound} />
  </Switch>
);

export default routers;
