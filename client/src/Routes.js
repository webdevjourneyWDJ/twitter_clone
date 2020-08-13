import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './compnents/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

import {UserContext} from './UserContext';
import axios from 'axios';

function Routes() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/user', {withCredentials: true}).then(x => setUser(x.data));
  }, [])

  return (
    <div className="routes">
      <Router>
        <UserContext.Provider value={{user, setUser}}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/profile" component={Profile}></Route>
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default Routes;
