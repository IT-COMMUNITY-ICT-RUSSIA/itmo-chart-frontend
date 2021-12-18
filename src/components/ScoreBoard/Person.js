import classes from "./Person.module.css";

function Person(props) {
  const user = props.userData;
  return (
    <li className={classes.person}>
      <div>{user.rating_position}</div>
      <div>{user.name}</div>
      <div>{user.megafaculty}</div>
      <div>{user.faculty}</div>
      <div>{user.program}</div>
      <div>{user.group}</div>
      <div>{user.points}</div>
    </li>
  );
}

export default Person;
