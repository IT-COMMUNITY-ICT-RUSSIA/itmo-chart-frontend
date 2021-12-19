import classes from "./UserAccount.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function UserAccount(props) {
  const [currentUser, setCurrentUser] = useState("");
  const getPerData = (date) => {
    const newDate = new Date(date)
    return `${newDate.getFullYear()}.${newDate.getMonth() < 10 ? "0" + (newDate.getMonth() + 1) : newDate.getMonth() + 1}.${newDate.getDate()}`
  }
  useEffect(() => {

    const apiUrl = `http://itmochart.netmvas.com:5000/user/me`;
    axios
      .get(apiUrl, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.user);
        setCurrentUser(response.data.user)
      });
  },[]);

  return (
    <section className={classes.section}>
      {localStorage.getItem('token') ? (
        <div className={classes.profile}>
          <h1>Информация:</h1>
          <div><h3>Имя: </h3>{currentUser.name}</div>
          <div><h3>Токены: </h3>{currentUser.coins}</div>
          <div><h3>Дата рождения:</h3>{getPerData(currentUser.birth_date)}</div>
          <div><h3>Факультет:</h3> {currentUser.faculty}</div>
          <div><h3>Направление:</h3> {currentUser.program}</div>
        </div>
      ) : (
        <h1>Зайдите в систему для того, чтобы увидеть ваш аккаунт </h1>
      )}
    </section>
  );
}

export default UserAccount;
