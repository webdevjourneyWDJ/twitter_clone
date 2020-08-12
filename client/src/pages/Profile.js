import React, {useContext} from 'react';
import{UserContext} from '../UserContext';

import TweetForm from '../compnents/TweetForm';

function Profile() {
  const {user} = useContext(UserContext);

  return (
    <div className="profile">
      <h1>Profile page</h1>
      <TweetForm user={user}/>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default Profile;
