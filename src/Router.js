import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home'
import Car from './containers/Car'
import Dashboard from './containers/Dashboard'
import AddCar from './containers/AddCar'
import LogIn from './components/LogIn'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/addcar" component={AddCar} />
            <Route path="/login" component={LogIn} />
        </Switch>
    );
};

export default Router;