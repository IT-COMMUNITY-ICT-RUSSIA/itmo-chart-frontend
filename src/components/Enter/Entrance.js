import Modal from "../UI/Modal";
import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import classes from "./Entrance.module.css";
import cancelCross from "../../assets/cancel.png";

import Input from "../input/Input";
import { ModalActions } from "../../store/modal-context";
import MyButton from "../UI/MyButton";

const emailReducer = (prevState, action) => {
  if (action.type === "USER_EMAIL") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: prevState.value, isValid: prevState.value.includes("@") };
  }
};

const passwordReducer = (prevState, action) => {
  if (action.type === "USER_PASS") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 6,
    };
  }
};

function Entrance(props) {
  const { onClose, onOpen } = useContext(ModalActions);

  const [formIsValid, setFormIsValid] = useState(false);

  const emailInputRef = useRef();
  const passInputRef = useRef();

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passState, dispatchPass] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });
  const { isValid: emailIsValid } = emailState;
  const { isValid: passIsValid } = passState;

  useEffect(() => {
    setFormIsValid(emailIsValid && passIsValid);
  }, [emailIsValid, passIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_EMAIL", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPass({ type: "USER_PASS", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPass({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Modal>
      <form onSubmit={submitHandler}>
        <h1>Войти в личный кабинет</h1>
        <Input
          ref={emailInputRef}
          state={emailState}
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        >
          ISU Number
        </Input>
        <Input
          ref={passInputRef}
          state={passState}
          type="password"
          id="password"
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        >
          Пароль
        </Input>
        <div className={classes.actions}>
          <MyButton isBig={true} type="submit">
            Войти
          </MyButton>
        </div>
      </form>
      <button className={classes.cross} onClick={onClose}>
        <img src={cancelCross} />
      </button>
    </Modal>
  );
}

export default Entrance;
