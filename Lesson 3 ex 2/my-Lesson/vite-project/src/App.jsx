import React, { useState } from 'react';
import  Table  from './companents/table/Table.jsx';
import './App.css';

function App() {
  const [state, setState] = useState(0);

  return (
    <>
      <Table />
      <div className="inVal"></div>
    </>
  );
}

export default App;