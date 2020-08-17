import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tweet({message, userName}) {

  return (
    <div className="card">
      <div className="grid">
        <div className="items card-heading">
          <div className="title">{userName}</div>
        </div>
        <div className="items card-content">
          <div>{message}</div>
        </div>
        <div className="items">
          <FontAwesomeIcon icon={['fas', 'heart']} className="subscription-tag"/>
          <FontAwesomeIcon icon={['fas', 'comment']} className="subscription-tag"/>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
