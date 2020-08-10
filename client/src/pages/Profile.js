import React, {useContext} from 'react';
import{UserContext} from '../UserContext';

function Profile() {
  const {user} = useContext(UserContext);

  return (
    <div className="profile">
      <h1>Profile page</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default Profile;
