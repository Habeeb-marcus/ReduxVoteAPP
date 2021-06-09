import React from "react";
import Counter from "./counter";
import "./styles.css";
import { useSelector } from "react-redux";
import counter from "./redux/Ducks/counter";

export default function App() {
  const count = useSelector((state) => state.counter.count);
  const voters = ["Babtunde John", "Adedoyin Makusota", "Mobalaji Smith"];
  return (
    <div className="App">
      <h1> Redux made easy</h1>
      <h2> Total Votes: {count} </h2>
      {voters.map((voter) => (
        <Counter name={voter} />
      ))}
    </div>
  );
}
