import React, { useEffect, useState } from "react";

export const ShoppingList = ({ data, increaseCounter, remove, edit }) => {
  const [list, setList] = useState(data);

  useEffect(() => {
    setList(data);
  }, [data]);

  const rename = (event, id) => {
    const newName = event.target.value;

    setList((list) =>
      list.map((item) => {
        if (item.id === id) {
          item.name = newName;
        }
        return item;
      })
    );
  };

  const onFocusLost = (id, newName) => {
    edit(id, newName);
  };

  const createRows = () => {
    return list.map((item) => (
      <tr key={item.id}>
        <td>
          <button
            className="btn btn-primary"
            onClick={() => increaseCounter(item.id)}
          >
            +1
          </button>
        </td>
        <td>
          <input
            className="form-control"
            value={item.name}
            onChange={(event) => rename(event, item.id)}
            onBlur={() => onFocusLost(item.id, item.name)}
          />
        </td>
        <td>
          <h3> {item.counter} </h3>
        </td>
        <td>
          <button className="btn btn-danger" onClick={() => remove(item.id)}>
            Remove
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <table className="table table-striped table-dark">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{createRows()}</tbody>
    </table>
  );
};
