import React, { createElement, useEffect, useState } from "react";
import axios from "axios";
import "./Table.css";

function Table() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/posts");
      setPosts(result.data);
    };
    fetchData();
  }, []);

  function ID() {
    posts.map((item) => createElement(tr));
  }

  function loadData() {
  return new Promis((resolve, reject) => {
  setTimeout(resolve, 2000);
})}
 loadData()
 .then(() => {
  let preloaderEl = document.getElementById('preloader');
  preloaderEl.classList.add('hiden')
  preloaderEl.classList.remove('visible');
 })
}

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Name</th>
          <th>userName(Nik)</th>
          <th>email</th>
          <th>adress</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {posts.map((item) => (
            <td key={item.userId}>{item.id}</td>
          ))}
          {posts.map((item) => (
            <td key={item.userName}>{item.name}</td>
          ))}
          {posts.map((item) => (
            <td key={item.userUserName}>{item.userName}</td>
          ))}
                    {posts.map((item) => (
            <td key={item.userEmail}>{item.email}</td>
          ))}
                    {posts.map((item) => (
            <td key={item.userAdress}>{item.adress}</td>
          ))}
        </tr>
        <tr>
          {posts.map((item) => (
            <td key={item.userId}>{item.id}</td>
          ))}
          {posts.map((item) => (
            <td key={item.userName}>{item.name}</td>
          ))}
          {posts.map((item) => (
            <td key={item.userUserName}>{item.userName}</td>
          ))}
          {posts.map((item) => (
            <td key={item.userEmail}>{item.email}</td>
          ))}
          {posts.map((item) => (
            <td key={item.userAdress}>{item.adress}</td>
          ))}
        </tr>
        <tr>
          {posts.map((item) => (
            <td key={item.userId}>{item.id}</td>
          ))}
          {posts.map((item) => (
            <td key={item.userName}>{item.name}</td>
          ))}
          {posts.map((item) => (
            <td key={item.userUserName}>{item.userName}</td>
          ))}
          {posts.map((item) => (
            <td key={item.userEmail}>{item.email}</td>
          ))}
          {posts.map((item) => (
            <td key={item.userAdress}>{item.adress}</td>
          ))}
        </tr>
        <tr>
          <td className="App">
            {posts.map((item) => (
              <div key={item.userId}>{item.id};</div>
            ))}
          </td>
          {posts.map((item) => (
            <td key={item.userName}>{item.name}</td>
          ))}
          {posts.map((item) => (
            <td key={item.userUserName}>{item.userName}</td>
          ))}
          {posts.map((item) => (
            <td key={item.userEmail}>{item.email}</td>
          ))}
          {posts.map((item) => (
            <td key={item.userAdress}>{item.adress}</td>
          ))}
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
