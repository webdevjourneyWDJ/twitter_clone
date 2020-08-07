import React, {useContext} from 'react';
import{UserContext} from '../UserContext';

function Home() {
  const msg = useContext(UserContext);

  return (
    <div className="home">
      <h1>Home page</h1>
      <p>{msg}</p>
    </div>
  );
}

export default Home;
