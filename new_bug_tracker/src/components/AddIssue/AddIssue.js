import React, { useState, useEffect } from "react";
import "./AddIssue.css"

function AddIssue() {
  const [addIssue, setAddIssue] = useState(true);

  return (
    <div className="add-issue">
      <form>
        <label>
          Description<input type="text"></input>
        </label>
        <label>
          Assign To
          <select name="forDev" id="forDev">
            <option value="Joe">Joe</option>
            <option value="Sarah">Sarah</option>
            <option value="Tom">Tom</option>
            <option value="Mary">Mary</option>
          </select>
        </label>
        <label>
          Priority Level
          <select name="priority" id="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Highest-Priority">Highest Priority</option>
          </select>
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddIssue;
