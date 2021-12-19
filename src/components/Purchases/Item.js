import MyButton from "../UI/MyButton";
import classes from "./Item.module.css";

function Item(props) {
  return (
    <div className={classes.card} >
      <img src={props.img} />
      <h2>{props.name}</h2>
      <p>{props.des}</p>
      <div>{`${props.ammount} tkn`}</div>
      <MyButton id={props.id} Click={props.openModal}>Купить</MyButton>
    </div>
  );
}

export default Item;
