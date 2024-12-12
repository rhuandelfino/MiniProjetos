import React, { useState, useEffect } from 'react';

function ExibirDados() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setDados(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {dados.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExibirDados;