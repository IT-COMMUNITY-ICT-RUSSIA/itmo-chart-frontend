import classes from "./UserAccount.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function UserAccount() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const apiUrl = ``;
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      setCurrentUser(allPersons);
    });
  }, [currentUser]);

  return (
    <section>
      <h1>Добро пожаловать user</h1>
    </section>
  );
}

export default UserAccount;
