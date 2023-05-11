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

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setElements(result.data);
    };
    fetchData();
  }, []);

  const reset = () => {
    setInputOne("");
    setInputTwo("");
    setInputEmail("")
    setInputAddress("")
  };

 

  const addToDo = () => {
    setElements((prevState) => [
      {
        name: inputOne,
        username: inputTwo,
        email: inputEmail,
        address:  inputAddress
      },
      ...prevState,
    ]);

    // Clear form inputs
    setInputOne("");
    setInputTwo("");
    setInputEmail("")
    setInputAddress("")
  };

  const sortElements = (event) => {
    setInputSearch(event.target.value);

    if (elements.length) {
      setElementsWithSearch(
        elements.filter((element) =>
          element.task.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    }
  };

  return (
    <>
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
          onChange={(event) => setInputTwo(event.target.value)}
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
      <Btn onClick={reset} />
      <BtnTodo onClick={addToDo} />
      <div className="todo">
        {inputSearch
          ? elementsWithSearch.map((element) => (
              <div key={element.name} className="name">
                <ToDo>
                  {element.name}
                  {element.username}
                </ToDo>
              </div>
            ))
          : elements.map((element) => (
              <div key={element.name} className="name">
                <ToDo>
                  {element.name}
                  {element.username}
                </ToDo>
              </div>
            ))}
        <Table posts={elements} />
      </div>
    </>
  );
}

export default App;
