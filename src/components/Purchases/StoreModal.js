import Modal from "../UI/Modal";
import MyButton from "../UI/MyButton";
import axios from "axios";

import classes from "./StoreModal.module.css";

function StoreModal(props) {
  const purchaseHandler = () => {
    console.log(localStorage.getItem('token'));
    axios
      .get(
        `http://itmochart.netmvas.com:5000/service/checkout?reward_id=${props.id}`,{
          headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json",
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          },
        }
      )
      .then((res) => {
        console.log(res);
        props.close();
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal close={props.close}>
      <h1>Вы точно хотите купить этот товар?</h1>
      <div className={classes["main-btns"]}>
        <MyButton Click={purchaseHandler}>Купить</MyButton>
        <MyButton Click={props.close} isHole={true} isExit={true}>
          Отмена
        </MyButton>
      </div>
    </Modal>
  );
}

export default StoreModal;
