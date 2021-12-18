import React from "react";
import Header from "./HomeHeader";
import classes from "./Home.module.css";
import Main from "./Main";
import Store from "../Purchases/Store";

import { Routes, Route, Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="main" element={<Main />} />
        <Route path="top" element={<h1>top</h1>} />
        <Route path="store" element={<Store />} />
        <Route path="account" element={<h1>account</h1>} />
      </Routes>
    </>
  );
}

export default Home;
