import React, {useContext} from 'react';
import{UserContext} from '../UserContext';

function Home() {
  const {user} = useContext(UserContext);

  return (
    <div className="home section">
      <h1>Home page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default Home;
