import React, { useState } from "react";

export const AddItem = ({ addItem }) => {
  const [state, setState] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (state.trim().length > 0) addItem(state);
    setState("");
  };
  return (
    <>
      <h3 className="text-light">Add to shopping list</h3>
      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          placeholder="I need..."
          value={state}
          onChange={(event) => setState(event.target.value)}
        ></input>
      </form>
    </>
  );
};
