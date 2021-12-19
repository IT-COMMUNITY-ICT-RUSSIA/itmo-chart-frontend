import classes from "./UserAccount.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function UserAccount(props) {
  const [currentUser, setCurrentUser] = useState("");
  const [currentAchievements, setcurrentAchievements] = useState([])
  const [currentRewards, setcurrentRewards] = useState([])
  const getPerData = (date) => {
    const newDate = new Date(date);
    return `${newDate.getFullYear()}.${
      newDate.getMonth() < 10
        ? "0" + (newDate.getMonth() + 1)
        : newDate.getMonth() + 1
    }.${newDate.getDate()}`;
  };
  useEffect(() => {
    const apiUrlUser = `http://itmochart.netmvas.com:5000/user/me`;
    const apiUrlAchivment = `http://itmochart.netmvas.com:5000/user/achievements`
    const apiUrlPurchases = `http://itmochart.netmvas.com:5000/user/purchase-history`
    axios
      .get(apiUrlUser, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.user);
        setCurrentUser(response.data.user);
      });

      axios
      .get(apiUrlAchivment, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setcurrentAchievements(response.data.achievements);
      });

      axios
      .get(apiUrlPurchases, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data.purchases);
        setcurrentRewards(response.data.purchases)
      });

  }, []);

  return (
    <section className={classes.section}>
      {localStorage.getItem("token") ? (
        <div className={classes.profile}>
          <h1>Информация:</h1>
          <div>
            <h3>Имя: </h3>
            {currentUser.name}
          </div>
          <div>
            <h3>Баллы: </h3>
            {currentUser.points}
          </div>
          <div>
            <h3>Дата рождения:</h3>
            {getPerData(currentUser.birth_date)}
          </div>
          <div>
            <h3>Факультет:</h3> {currentUser.faculty}
          </div>
          <div>
            <h3>Направление:</h3> {currentUser.program}
          </div>
          <h1>Достижения:</h1>
          {currentAchievements.length === 0 
          ? <h2>У вас пока нет достижений</h2>
          : <div className={classes.field}>
              {currentAchievements.map((ach) => {
                return (
                <div className={classes.card}>{}</div>
                )
              })}
            </div>
          }
          
          <h1>Покупки:</h1>
          {currentRewards.length === 0 
          ? <h2>У вас пока нет покупок</h2>
          : <div className={classes.field}>
              {currentAchievements.map((item) => {
                return (
                <div className={classes.card}>{}</div>
                )
              })}
            </div>
          }
        </div>
      ) : (
        <h1>Зайдите в систему для того, чтобы увидеть ваш аккаунт </h1>
      )}
    </section>
  );
}

export default UserAccount;
