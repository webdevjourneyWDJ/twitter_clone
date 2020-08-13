import React from 'react';

function Tweet({message, userName}) {

  return (
    <div className="card"> 
      <p>{userName}</p>
      <p>{message}</p>
      <div>
        <p>icon</p>
        <p>icon</p>
      </div>
    </div>
  );
}

export default Tweet;
