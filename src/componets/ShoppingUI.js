import React, { useEffect, useState } from "react";
import { AddItem } from "../componets/AddItem";
import { ShoppingList } from "../componets/ShoppingList";

const ShoppingUI = ({
  socket,
  online,
  increaseCounter,
  remove,
  edit,
  addItem,
}) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    socket.on("fetch-list", (list) => {
      setList(list);
    });
  }, [socket]);

  return (
    <div className="container-fluid" classe={{}}>
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <div className={`alert alert-${online ? "success" : "danger"}`}>
            <p className={`text-dark`}>
              Service status:
              {online ? (
                <span className="text-success"> Online</span>
              ) : (
                <span className="text-danger"> Offline</span>
              )}
            </p>
          </div>
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <ShoppingList
            data={list}
            increaseCounter={increaseCounter}
            remove={remove}
            edit={edit}
          />
        </div>
        <div className="col-1"></div>
      </div>

      <div className="row">
        <div className="col-2"></div>

        <div className="col-8">
          <AddItem addItem={addItem} />
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default ShoppingUI;
