import React, {useContext} from 'react';
import{UserContext} from '../UserContext';

import Tweet from '../compnents/Tweet';

function Profile() {
  const {user} = useContext(UserContext);

  return (
    <div className="profile section">
      <h1>Profile page</h1>
      <Tweet />
    </div>
  );
}

export default Profile;
