import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({
    name: "",
    age: "",
    studies: false,
  });

  function changeName(e) {
    setData((values) => ({
      ...values,
      name: e.target.value,
    }));
  }

  function changeAge(e) {
    setData((values) => ({
      ...values,
      age: e.target.value,
    }));
  }

  function changeStudies(e) {
    setData((values) => ({
      ...values,
      studies: !data.studies,
    }));
  }

  function process(e) {
    e.preventDefault();
    alert("Loaded data: " + data.name + " " + data.age + " " + data.studies);
  }

  return (
    <div>
      <form onSubmit={process}>
        <label>Enter your name:</label>
        <input type="text" value={data.name} onChange={changeName} />
        <label>Enter your age:</label>
        <input type="text" value={data.age} onChange={changeAge} />
        <label>Studies:</label>
        <input type="checkbox" value={data.studies} onChange={changeStudies} />
        <button type="submit">Process</button>
      </form>
      <hr />
      <h3>Loaded data</h3>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
      <p>Studies: {data.studies ? "With studies" : "Without studies"}</p>
    </div>
  );
}

export default App;
