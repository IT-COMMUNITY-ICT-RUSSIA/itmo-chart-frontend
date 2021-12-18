import MyButton from "../UI/MyButton";
import classes from "./Item.module.css";

function Item(props) {
  return (
    <div className={classes.card} id={props.id}>
      <img src={props.img} />
      <h2>{props.name}</h2>
      <div>{`${props.ammount} tkn`}</div>
      <MyButton>Купить</MyButton>
    </div>
  );
}

export default Item;