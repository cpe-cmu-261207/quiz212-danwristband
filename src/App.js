import { useState } from "react";
import { person } from "./person";
function App() {
  const [count, setCount] = useState(620610821);
  const persons = [
    {
      name: "Akkaraphan Rattanakos 620610821",
      gender: "male",
      age: "20"
    },
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    }
  ];

  const lit = persons.map((person, index) => {
    return <person key={index} personlist={persons} />;
  });
  return (
    <div class="ml-2">
      {/* Code me please! */}

      <div class="mb-4">
        <h3 class="title is-3">ID Counter</h3>
        <p>{count}</p>
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(620610821)}>reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>

      {/* Convert me to a component! */}
      <h3 class="title is-3">Person List</h3>
      {lit}
    </div>
  );
}

export default App;
