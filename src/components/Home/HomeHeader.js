import classes from "./HomeHeader.module.css";
import MyButton from "../UI/MyButton";
import logo_transparent from "../../assets/itmo_small_white_rus.png";
import avatar from "../../assets/avatar1.png";
import React, { useContext } from "react";

import { ModalActions } from "../../modal-context";

function Header() {
  const { onClose, onOpen } = useContext(ModalActions);

  return (
    <header>
      <div className={classes.logo}>
        <img alt="logo" src={logo_transparent}></img>
      </div>
      <div className={classes.content}>
        <nav>
          <a href="#">Рейтинг</a>
          <a href="#">Магазин</a>
          <a href="#">Личный кабинет</a>
        </nav>
        <div>
          <img src={avatar} />
          <MyButton Click={onOpen} isHole={true}>
            Войти
          </MyButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
