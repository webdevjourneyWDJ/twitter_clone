import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './compnents/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

import {UserContext} from './UserContext';

function Routes() {
  return (
    <div className="routes">
      <Router>
        <Nav />
        <Switch>
          <UserContext.Provider value="Hello from Context">
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/profile" component={Profile}></Route>
          </UserContext.Provider>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
