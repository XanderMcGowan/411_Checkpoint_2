import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './containers/Home'
import List from './containers/List'
import Dashboard from './containers/Dashboard'
import AddList from './containers/AddList.js'
import LogIn from './components/LogIn'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/list/:id" component={List} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/addList" component={AddList} />
            <Route path="/login" component={LogIn} />
        </Switch>
    );
};

export default Router;