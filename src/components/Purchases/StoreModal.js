import Modal from "../UI/Modal";
import MyButton from "../UI/MyButton";

import classes from "./StoreModal.module.css";

function StoreModal(props) {
  return (
    <Modal close={props.close}>
      <h1>Вы точно хотите купить этот товар?</h1>
      <div className={classes["main-btns"]}>
        <MyButton>Купить</MyButton>
        <MyButton Click={props.close} isHole={true} isExit={true}>
          Отмена
        </MyButton>
      </div>
    </Modal>
  );
}

export default StoreModal;
