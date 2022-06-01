import React, { useState} from "react";
import AddIssue from "./components/AddIssue/AddIssue.js";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue.js";
import "./App.css";

function App() {
  const [addIssue, setAddIssue] = useState(true);

  function showAddIssue() {
    setAddIssue(true);
  }

  function showCurrentIssue() {
    setAddIssue(false);
  }

  return (
    <div className="App">
      <h1>Bug Tracker</h1>
      <div className="grey-card-container">
        {addIssue ? <AddIssue /> : <CurrentIssue />}
      </div>
      <div class="view-selection-div">
        <button class="view-button" onClick={() => showCurrentIssue()}>
          Current Issues
        </button>
        <button
          class="view-button active-button"
          onClick={() => {
            showAddIssue();
          }}
        >
          Add Issue
        </button>
      </div>
    </div>
  );
}

export default App;
