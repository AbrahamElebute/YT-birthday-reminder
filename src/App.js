import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [people, setPeople] = useState(data);
  const handleClearAll = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} brithdays today</h3>
        <List people={people} />
        <button onClick={handleClearAll}> Clear all</button>
      </section>
    </main>
  );
}

export default App;
