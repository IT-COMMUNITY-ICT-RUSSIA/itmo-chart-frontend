import React from "react";
import Header from "./HomeHeader";
import classes from "./Home.module.css";
import Main from "./Main";

import { Routes, Route, Link } from "react-router-dom";

function Home(props) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="store" element={<h1>store</h1>} />
        <Route path="account" element={<h1>account</h1>} />
        <Route path="top" element={<h1>top</h1>} />
        <Route path="main" element={<Main />} />
      </Routes>
    </>
  );
}

export default Home;
