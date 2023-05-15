import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./companents/table/Table.jsx";
import Input from "./companents/Input/Input.jsx";
import BtnTodo from "./companents/Button/BtnTodo.jsx";
import Btn from "./companents/Btn/Btn.jsx";
import ToDo from "./companents/ToDo/ToDo.jsx";
import "./App.css";

function App() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [elements, setElements] = useState([]);
  const [elementsWithSearch, setElementsWithSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setElements(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const reset = () => {
    setInputOne("");
    setInputTwo("");
    setInputEmail("");
    setInputAddress("");
  };

  const addToDo = () => {
    setElements((prevState) => [
      {
        name: inputOne,
        username: inputTwo,
        email: inputEmail,
        address: {
          city: inputAddress,
          street: inputAddress,
          suite: inputAddress,
        },
      },
      ...prevState,
    ]);

    // Clear form inputs
    setInputOne("");
    setInputTwo("");
    setInputEmail("");
    setInputAddress("");
  };

  const sortElements = (event) => {
    setInputSearch(event.target.value);

    if (elements.length) {
      setElementsWithSearch(
        elements.filter(
          (element) =>
            element.name
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            element.username
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <>
      <div>
        {isLoading ? (
          <img src="./src/companents/Loading/XOsX.gif" alt="loading..." /> // здесь путь к вашей гифке загрузки
        ) : (
          <ul>
            {elements.map((element) => (
              <div key={element.id}> </div>
            ))}
          </ul>
        )}
      </div>
      <div className="inVal">
        <Input
          type="text"
          value={inputOne}
          onChange={(event) => setInputOne(event.target.value)}
          placeholder="Name"
        />
        <Input
          type="text"
          value={inputTwo}
          onChange={(event) => setInputTwo(event.target.value)} // Обновлено с setInputOne() на setInputTwo()
          placeholder="LastName"
        />
        <Input
          type="text"
          value={inputEmail}
          onChange={(event) => setInputEmail(event.target.value)}
          placeholder="Email"
        />
        <Input
          type="text"
          value={inputAddress}
          onChange={(event) => setInputAddress(event.target.value)}
          placeholder="Address"
        />
        <Input
          type="text"
          value={inputSearch}
          onChange={sortElements}
          placeholder="Search"
        />
      </div>
      <div className="buttons">
        <Btn onClick={reset} />
        <BtnTodo onClick={addToDo} />
      </div>
      <div className="todo">
        <Table posts={inputSearch ? elementsWithSearch : elements} />
      </div>
    </>
  );
}

export default App;
