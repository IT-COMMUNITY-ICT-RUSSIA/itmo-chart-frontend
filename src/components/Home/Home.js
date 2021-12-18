import React from "react";
import Header from "./HomeHeader";
import classes from "./Home.module.css";
import Main from "./Main";
import Store from "../Purchases/Store";
import LeaderBoard from "../ScoreBoard/LeaderBoard";

import { Routes, Route, Link } from "react-router-dom";
import UserAccount from "../Account/UserAccount";

function Home(props) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="main" element={<Main />} />
        <Route path="top" element={<LeaderBoard />} />
        <Route path="store" element={<Store />} />
        <Route path="account" element={<UserAccount />} />
      </Routes>
    </>
  );
}

export default Home;
