import classes from "./HomeHeader.module.css";
import MyButton from "../UI/MyButton";
import logo_transparent from "../../assets/itmo_small_white_rus.png";
import coins_img from "../../assets/dollar.png";
import { Link } from "react-router-dom";

import React, { useContext, useState } from "react";
import { ModalActions } from "../../store/modal-context";
import { useEffect } from "react/cjs/react.development";
import axios from "axios";

function Header() {
  const { onClose, onOpen } = useContext(ModalActions);
  const [currentName, setcurrentName] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [currentCoin, setCurrentCoin] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false); // it use for refresh component

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
      const apiUrl = `http://itmochart.netmvas.com:5000/user/me`;
      axios
        .get(apiUrl, {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          setCurrentCoin(response.data.user.coins);
          setCurrentImage(response.data.user.isu_id);
          const fullName = response.data.user.name.split(" ");
          fullName.pop();
          setcurrentName(fullName.join(" "));
        });
    }
  }, [localStorage.getItem("token")]);

  const logotHandler = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <header>
      <div className={classes.logo}>
        <Link to="/">
          <img alt="logo" src={logo_transparent} />
        </Link>
      </div>
      <div className={classes.content}>
        <nav>
          <Link to="/top">Рейтинг</Link>
          {localStorage.getItem("token") && <Link to="/store">Магазин</Link>}
          {localStorage.getItem("token") && (
            <Link to="/account">Личный кабинет</Link>
          )}
        </nav>
        <div className={classes.info}>
          {localStorage.getItem("token") ? (
            <div className={classes["info-inner"]}>
              <p>{currentCoin}</p>
              <img className={classes.coins} alt={"coins"} src={coins_img} />
              <img
                className={classes["logo-img"]}
                src={`https://isu.ifmo.ru/userpics/${currentImage}.jpg`}
              />
              <div>
                <h3>{currentName}</h3>
                <Link to="/">
                  <MyButton Click={logotHandler} isExit={true} isHole={true}>
                    Выйти
                  </MyButton>
                </Link>
              </div>
            </div>
          ) : (
            <MyButton Click={onOpen} isHole={true}>
              Войти
            </MyButton>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
