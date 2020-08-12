import React, { useState } from 'react';
import axios from 'axios';

function TweetForm({user}) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/user/tweet', {message, userId: user.userId}, {withCredentials: true}).then(data => console.log(data));
  }
  return (
    <form onSubmit={handleSubmit}>
      <textarea name="message" placeholder="tell me something juicy" onChange={(e) => setMessage(e.target.value)}></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default TweetForm;
