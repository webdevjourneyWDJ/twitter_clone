import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Nav from './compnents/Nav';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';

import {UserContext} from './UserContext';
import ApiService from './services/ApiService';

function Routes() {
  const [user, setUser] = useState(null);

  const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => 
      user.isAuth ? (
        <div>
          <Nav />
          <Component {...props} />
        </div>
      ):(
        <Redirect to='/' />
      )
    }/>
  )

  useEffect(() => {
    ApiService.getUser().then(x => setUser(x.data));
  }, [])

  if(user){
    return (
      <div className="routes">
        <Router>
          <UserContext.Provider value={{user, setUser}}>
            <Switch>
              <Route exact path="/">
                {user.isAuth ? <Redirect to='profile' /> : <Login />}
              </Route>
              <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
              <PrivateRoute exact path="/profile" component={Profile}></PrivateRoute>
            </Switch>
          </UserContext.Provider>
        </Router>
      </div>
    );
  }

  return (
    <div>
      Loading...
    </div>
  )
}

export default Routes;
