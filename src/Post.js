import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = ({ post }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then(response => {
        setAuthor(response.data);
      });
  }, [post.userId]);

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>Author: {author.name}</p>
    </div>
  );
};

export default Post;
