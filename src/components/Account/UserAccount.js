import classes from "./UserAccount.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function UserAccount(props) {
  const [currentUser, setCurrentUser] = useState("");

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
    <section>
      {localStorage.getItem('token') ? (
        <div >
          <div>{currentUser.name}</div>
          <div>{currentUser.coins}</div>
          <div>{currentUser.birth_date}</div>
          <div>{currentUser.faculty}</div>
          <div>{currentUser.program}</div>
        </div>
      ) : (
        <h1>Зайдите в систему для того, чтобы увидеть ваш аккаунт </h1>
      )}
    </section>
  );
}

export default UserAccount;
