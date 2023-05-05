import React, { useState } from "react";
import Table from "./companents/table/Table.jsx";
import Input from "./companents/Input/Input.jsx";
import BtnTodo from "./companents/Button/BtnTodo.jsx";
import Btn from "./companents/Btn/Btn.jsx";
import "./App.css";

function App() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [inputTask, setInputTask] = useState("");
  const [inputDecoding, setInputDecoding] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [elements, setElements] = useState([]);
  const [elementsWithSearch, setElementsWithSearch] = useState([]);

  const reset = () => {
    setInputOne("");
    setInputTwo("");
  };

  const addToDo = () => {
    setElements((prevState) => [
      {
        task: inputTask,
        detail: inputDecoding,
      },
      ...prevState,
    ]);
    setInputTask("");
    setInputDecoding("");
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
          value={inputOne}
          onChange={(event) => setInputOne(event.target.value)}
          placeholder="Name"
        />
        <Input
          value={inputTwo}
          onChange={(event) => setInputTwo(event.target.value)}
          placeholder="LastName"
        />          
        <Input
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
              <div key={element.task} className="task">
                <ToDo>
                  {element.task}
                  {" : "}
                  {element.detail}
                </ToDo>
              </div>
            ))
          : elements.map((element) => (
              <div key={element.task} className="task">
                <ToDo>
                  {element.task}
                  {" : "}
                  {element.detail}
                </ToDo>
              </div>
            ))}
        <Table />
      </div>
    </>
  );
}

export default App;
