import classes from "./UserAccount.module.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function UserAccount() {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const apiUrl = `http://itmochart.netmvas.com:5000/user/me`;
    const data = {
      access_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwMDAwMDEiLCJleHAiOjE2Mzk4NTUwNjl9.3eKMt6WynFwK87XIozYnYTFNykPnuaG2Aoh5fMsNlKk",
      token_type: "bearer",
    };
    axios.get(apiUrl, {}).then((resp) => {
      console.log(resp);
    });
  }, [currentUser]);

  return (
    <section>
      <h1>Добро пожаловать user</h1>
    </section>
  );
}

export default UserAccount;
