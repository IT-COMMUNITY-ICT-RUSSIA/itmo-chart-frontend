import Home from "./components/Home/Home";
import Entrance from "./components/Enter/Entrance";
import React, { useState, useContext } from "react";
import { ModalActions } from "./store/modal-context";
import { Routes, Route, Link } from "react-router-dom";

import AuthContext from "./store/auth-context.js";

function App() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const openEntanceModalHandler = () => {
    setmodalIsOpen(true);
  };

  const closeEntanceModalHandler = () => {
    setmodalIsOpen(false);
  };

  const ctx = useContext(AuthContext);
  return (
    <ModalActions.Provider
      value={{
        onClose: closeEntanceModalHandler,
        onOpen: openEntanceModalHandler,
      }}
    >
      <Home></Home>
      {modalIsOpen && <Entrance />}
    </ModalActions.Provider>
  );
}

export default App;
