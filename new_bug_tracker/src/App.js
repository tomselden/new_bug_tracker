import React, { useState, useEffect } from "react";
import AddIssue from "./components/AddIssue/AddIssue.js";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue.js";
import "./App.css";

function App() {
  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="App">
      <h1>Bug Tracker</h1>
      <div className="grey-card-container">
        {addIssue ? <AddIssue /> : <CurrentIssue />}
      </div>
      <div>
        <button>Current Issues</button>
        <button>Add Issue</button>
      </div>
    </div>
  );
}

export default App;
