import Select from "../UI/Select";
import classes from "./LeaderBoard.module.css";
import React, { useState, useEffect } from "react";

import axios from "axios";

import Person from "./Person";

function LeaderBoard() {
  const [currnetMegafaculty, setCurrnetMegafaculty] = useState("");
  const [currnetFaculty, setCurrneFaculty] = useState("");
  const [currnetProgram, setCurrnetProgram] = useState("");

  const [users, setUsers] = useState([]);

  const [sortFaculty, setSortFaculty] = useState([]);
  const [sortProgram, setSortProgram] = useState([]);

  useEffect(() => {
    const apiUrl = `http://itmochart.netmvas.com:5000/chart/`;
    axios
      .get(apiUrl, {
        params: {
          megafaculty: currnetMegafaculty === "" ? null : currnetMegafaculty,
          faculty: currnetFaculty === "" ? null : currnetFaculty,
          program: currnetProgram === "" ? null : currnetProgram,
        },
      })
      .then((resp) => {
        const allPersons = resp.data.chart_data;
        setUsers(allPersons);
      });
  }, [currnetMegafaculty, currnetFaculty, currnetProgram]);

  const currnetMegafacultyHandler = (sort) => {
    setCurrnetMegafaculty(sort);
  };
  const currnetFacultyHandler = (sort) => {
    setCurrneFaculty(sort);
  };
  const currnetProgramHandler = (sort) => {
    setCurrnetProgram(sort);
  };

  useEffect(() => {
    if (currnetMegafaculty === "МФ КТУ") {
      setSortFaculty(["ФПИиКТ", "ФБИТ", "ФСУиР"]);

      if (currnetFaculty === "ФПИиКТ") {
        setSortProgram([
          "Информатика и вычислительная техника",
          "Программная инженерия",
        ]);
      } else if (currnetFaculty === "ФБИТ") {
        setSortProgram([
          "Информационная безопасность",
          "Конструирование и технология электронных средств",
        ]);
      } else if (currnetFaculty === "ФСУиР") {
        setSortProgram(["Робототехника", "Приборостроение"]);
      }
    } else if (currnetMegafaculty === "ФТ МФ") {
      setSortFaculty(["ИИФ", "ФФ"]);
      if (currnetFaculty === "ИИФ") {
        setSortProgram(["Оптотехника"]);
      } else if (currnetFaculty === "ФФ") {
        setSortProgram(["Фотоника и оптоинформатика", "Техническая физика"]);
      }
    }
  }, [currnetMegafaculty, currnetFaculty]);

  return (
    <section className={classes["top-page"]}>
      <h1>Рейтинг студентов</h1>
      <Select
        onChange={currnetMegafacultyHandler}
        value={currnetMegafaculty}
        defaultValue="Мегафакультет"
        options={["МФ ТИНТ", "МФ КТУ", "ФТ МФ"]}
      ></Select>
      <Select
        value={currnetFaculty}
        onChange={currnetFacultyHandler}
        defaultValue="Факультет"
        options={sortFaculty}
      ></Select>
      <Select
        value={currnetProgram}
        onChange={currnetProgramHandler}
        defaultValue="Направление"
        options={sortProgram}
      ></Select>
      <ul className={classes.board}>
        {users.map((person) => {
          return <Person key={person.rating_position} userData={person} />;
        })}
      </ul>
    </section>
  );
}

export default LeaderBoard;
