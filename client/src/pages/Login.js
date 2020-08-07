import React, { useContext } from 'react';
import{UserContext} from '../UserContext';

function Login() {
  const msg = useContext(UserContext);

  return (
    <div className="login">
      <h1>Login page</h1>
      <p>{msg}</p>
    </div>
  );
}

export default Login;
