import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";

function Table() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setPosts(result.data);
    };
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Name</th>
          <th>userName(Nik)</th>
          <th>email</th>
          <th>address</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post, index) => (
          <tr key={post.id}>
            <td>{index + 1}</td>
            <td>{post.name}</td>
            <td>{post.username}</td>
            <td>{post.email}</td>
            <td>{`${post.address.city}, ${post.address.street}, ${post.address.suite}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
