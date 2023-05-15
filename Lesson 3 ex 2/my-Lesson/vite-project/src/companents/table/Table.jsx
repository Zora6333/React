import React, { useState } from "react";
import "./Table.css";

function Table({ posts }) {
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortConfig.direction === "ascending") {
      return a[sortConfig.key] > b[sortConfig.key] ? 1 : -1;
    }
    if (sortConfig.direction === "descending") {
      return a[sortConfig.key] < b[sortConfig.key] ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  // Добавляем фигурные скобки для обрамления тела функции компонента Table
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => requestSort("id")}>№</th>
          <th onClick={() => requestSort("name")}>Name</th>
          <th onClick={() => requestSort("username")}>userName(Nik)</th>
          <th onClick={() => requestSort("email")}>email</th>
          <th onClick={() => requestSort("address.city")}>address</th>
        </tr>
      </thead>
      <tbody>
        {sortedPosts.map((post, index) => (
          <tr key={post.id}>
            <td>{index + 1}</td>
            <td className="name">{post.name}</td>
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
