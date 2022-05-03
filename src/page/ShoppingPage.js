import React from "react";
import ShoppingUI from "../componets/ShoppingUI";

const ShoppingPage = ({ socket, online }) => {
  const increaseCounter = (id) => {
    const acknowledgement = (result) => {
      console.error(result);
    };

    socket.emit("increment-counter", id, acknowledgement);
  };

  const remove = (id) => {
    socket.emit("remove-item", id);
  };

  const edit = (id, name) => {
    socket.emit("edit-item", { id, name });
  };

  const addItem = (name) => {
    socket.emit("add-item", { name });
  };

  return (
    <ShoppingUI
      socket={socket}
      online={online}
      increaseCounter={increaseCounter}
      remove={remove}
      edit={edit}
      addItem={addItem}
    />
  );
};

export default ShoppingPage;
