import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/people")
      .then(res => res.json())
      .then(data => setPeople(data));
  }, []);

  return (
    <div className="container">
      <h1>Person Class Hierarchy</h1>

      {people.map((person, index) => (
        <div key={index} className="card">
          <h2>{person.name} ({person.role})</h2>
          <p><strong>Age:</strong> {person.age}</p>
          <p className="message">{person.message}</p>

          {person.major && (
            <p><strong>Major:</strong> {person.major}</p>
          )}

          {person.subject && (
            <p><strong>Teaching:</strong> {person.subject}</p>
          )}
        </div>
      ))}

    </div>
  );
}

export default App;
