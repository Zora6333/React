import React, { useState } from "react";
import Table from "./companents/table/Table.jsx";
import Input from './companents/Input/Input.jsx';
import Button from './companents/Button/Button.jsx';
import "./App.css";

function App() {
  const [state, setState] = useState(0);

  return (
    <>
      <Input />
      <Button />
      <Table />
      <div className="inVal"></div>
    </>
  );
}

export default App;
