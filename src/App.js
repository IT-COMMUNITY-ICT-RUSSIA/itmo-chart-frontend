import MyButton from "./components/UI/MyButton";
import Home from "./components/Home/Home";
import Entrance from "./components/Enter/Entrance";
import React, { useState } from "react";
import { ModalActions } from "./modal-context";
function App() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const openEntanceModalHandler = () => {
    setmodalIsOpen(true);
  };

  const closeEntanceModalHandler = () => {
    setmodalIsOpen(false);
  };
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
