import classes from "./LeaderBoard.module.css";

import Person from "./Person";

function LeaderBoard() {
  const data = [
    {
      name: "A",
      megafaculty: "string",
      faculty: "string",
      program: "string",
      group: "string",
      points: 0,
      rating_position: 1,
    },
    {
      name: "Б",
      megafaculty: "string",
      faculty: "string",
      program: "string",
      group: "string",
      points: 0,
      rating_position: 2,
    },
    {
      name: "В",
      megafaculty: "string",
      faculty: "string",
      program: "string",
      group: "string",
      points: 0,
      rating_position: 3,
    },
    {
      name: "Г",
      megafaculty: "string",
      faculty: "string",
      program: "string",
      group: "string",
      points: 0,
      rating_position: 4,
    },
    {
      name: "Д",
      megafaculty: "string",
      faculty: "string",
      program: "string",
      group: "string",
      points: 0,
      rating_position: 5,
    },
  ];
  return (
    <ul className={classes.board}>
      {data.map((person) => {
        return <Person key={person.rating_position} userData={person} />;
      })}
    </ul>
  );
}

export default LeaderBoard;
