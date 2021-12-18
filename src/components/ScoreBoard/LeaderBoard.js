import Select from "../UI/Select";
import classes from "./LeaderBoard.module.css";
import React, { useState, useEffect } from "react";

import axios from "axios";

import Person from "./Person";

function LeaderBoard() {
  const [currnetMegafaculty, setCurrnetMegafaculty] = useState("");
  const [currnetFaculty, setCurrneFaculty] = useState("");
  const [currnetProgram, setCurrnetProgram] = useState("");
  const [currnetGroup, setCurrnetGroup] = useState("");

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiUrl = `http://itmochart.netmvas.com:5000/chart/`;
    axios
      .get(apiUrl, {
        params: {
          megafaculty: currnetMegafaculty === "" ? null : currnetMegafaculty,
          faculty: currnetFaculty === "" ? null : currnetFaculty,
          program: currnetProgram === "" ? null : currnetProgram,
          group: currnetGroup === "" ? null : currnetGroup,
        },
      })
      .then((resp) => {
        const allPersons = resp.data.chart_data;
        setUsers(allPersons);
      });
  }, [currnetMegafaculty, currnetFaculty, currnetProgram, currnetGroup]);

  const currnetMegafacultyHandler = (sort) => {
    setCurrnetMegafaculty(sort);
  };
  const currnetFacultyHandler = (sort) => {
    setCurrneFaculty(sort);
  };
  const currnetProgramHandler = (sort) => {
    setCurrnetProgram(sort);
  };
  const currnetGroupHandler = (sort) => {
    setCurrnetGroup(sort);
  };
  let sortFaculty = [];
  let sortProgram = [];
  let sortGroup = [];
  // факультеты
  if (currnetMegafaculty === "МФ ТИНТ") {
    sortFaculty = ["ФИКТ", "ФИТИП"];

    if (currnetFaculty === "ФИКТ") {
      sortProgram = [
        "Прикладная информатика",
        "Инфокоммуникационные технологии и системы связи",
      ];
    }
    if (currnetFaculty === "ФИТИП") {
      sortProgram = [
        "Прикладная математика и информатика",
        "Информационные системы и технологии",
      ];
    }
  }
  if (currnetMegafaculty === "МФ КТУ") {
    sortFaculty = ["ФПИиКТ", "ФБИТ", "ФСУиР"];

    if (currnetFaculty === "ФПИиКТ") {
      sortProgram = [
        "Информатика и вычислительная техника",
        "Программная инженерия",
      ];
    }
    if (currnetFaculty === "ФБИТ") {
      sortProgram = [
        "Информационная безопасность",
        "Конструирование и технология электронных средств",
      ];
    }
    if (currnetFaculty === "ФСУиР") {
      sortProgram = ["Робототехника", "Приборостроение"];
    }
  }
  if (currnetMegafaculty === "ФТ МФ") {
    sortFaculty = ["ИИФ", "ФФ"];
    if (currnetFaculty === "ИИФ") {
      sortProgram = ["Оптотехника"];
    }
    if (currnetFaculty === "ФФ") {
      sortProgram = ["Фотоника и оптоинформатика", "Техническая физика"];
    }
  }
  // направления

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
