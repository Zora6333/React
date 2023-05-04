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
            <td key={item.userId}>
               {item.id}
            </td> ))}
         
        </tr>
        <tr>
        {posts.map((item) => ( 
            <td key={item.userId}>
               {item.id}
            </td> ))}
          <td>Row 2, Column 2</td>
          <td>Row 2, Column 3</td>
          <td>Row 2, Column 4</td>
          <td>Row 2, Column 5</td>
        </tr>
        <tr>
        {posts.map((item) => ( 
            <td key={item.userId}>
               {item.id}
            </td> ))}
          <td>Row 3, Column 2</td>
          <td>Row 3, Column 3</td>
          <td>Row 3, Column 4</td>
          <td>Row 3, Column 5</td>
        </tr>
        <tr>
          <td className="App">
            {posts.map((item) => (
              <div key={item.userId}>{item.id};</div>
            ))}
          </td>
          <td>Row 4, Column 2</td>
          <td>Row 4, Column 3</td>
          <td>Row 4, Column 4</td>
          <td>Row 4, Column 5</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
