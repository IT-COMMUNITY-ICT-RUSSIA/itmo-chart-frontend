import classes from "./HomeHeader.module.css";
import MyButton from "../UI/MyButton";
import logo_transparent from "../../assets/itmo_small_white_rus.png";
import avatar from "../../assets/avatar1.png";
import { Link } from "react-router-dom";

import React, { useContext, useState } from "react";
import { ModalActions } from "../../store/modal-context";

function Header() {
  const { onClose, onOpen } = useContext(ModalActions);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logotHandler = () => {
    setLoggedIn(false);
    localStorage.remove("token");
  };

  return (
    <header>
      <div className={classes.logo}>
        <Link to="/main">
          <img alt="logo" src={logo_transparent} />
        </Link>
      </div>
      <div className={classes.content}>
        <nav>
          <Link to="/top">Рейтинг</Link>
          <Link to="/store">Магазин</Link>
          <Link to="/account">Личный кабинет</Link>
        </nav>
        <div>
          <img src={avatar} />
          {isLoggedIn ? (
            <MyButton Click={logotHandler} isExit={true} isHole={true}>
              Выйти
            </MyButton>
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
