import React, { useEffect, useMemo, useState } from "react";
import io from "socket.io-client";
import ShoppingPage from "./page/ShoppingPage";

// Configuracion del socket
const connectSocketServer = () => {
  const socket = io.connect("http://localhost:8080", {
    transports: ["websocket"],
  });
  return socket;
};

function App() {
  // Inicializacion de la conexion
  const socket = useMemo(() => connectSocketServer(), []);
  const [online, setOnline] = useState(false);

  useEffect(() => {
    socket.on("connect", () => {
      setOnline(true);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
      // socket.off("fetch-list");
    });
  }, [socket]);

  return <ShoppingPage socket={socket} online={online} />;
}

export default App;
