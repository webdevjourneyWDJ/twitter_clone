import React, {useContext} from 'react';
import{UserContext} from '../UserContext';

function Profile() {
  const msg = useContext(UserContext);

  return (
    <div className="profile">
      <h1>Profile page</h1>
      <p>{msg}</p>
    </div>
  );
}

export default Profile;
