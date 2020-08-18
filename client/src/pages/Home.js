import React, {useContext, useEffect} from 'react';
import{UserContext} from '../UserContext';
import axios from 'axios';

function Home() {
  const {user} = useContext(UserContext);
  useEffect(() => {
    axios.get('http://localhost:8080/tweets', {withCredentials: true}).then(x => console.log(x));
  }, [])

  return (
    <div className="home section">
      <h1>Home page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default Home;
