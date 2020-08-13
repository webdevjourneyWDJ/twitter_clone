import React, { useContext } from 'react';
import{UserContext} from '../UserContext';

function Login() {
  const {user} = useContext(UserContext);

  return (
    <div className="login section">
      <h1>Login page</h1>
      {user && <h2>Welcome {user.name}</h2>}
      <a href="http://localhost:8080/auth/google">Login with Google</a>
      <a href="http://localhost:8080/auth/logout">Logout</a>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default Login;
