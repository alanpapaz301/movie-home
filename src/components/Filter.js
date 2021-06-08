import React from "react";
import "../App.css";

const Filter = (props) => {
  return (
    <div id="searchFilter">
      <label>Search for a specific movie(First 20 results displayed) </label>
      <input value={props.filter} onChange={props.handleFilterChange} />
    </div>
  );
};
export default Filter;
