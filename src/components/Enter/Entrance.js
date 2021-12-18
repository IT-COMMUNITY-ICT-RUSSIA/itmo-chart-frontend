import Modal from "../UI/Modal";
import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import axios from "axios";

import AuthContext from "../../store/auth-context";

import classes from "./Entrance.module.css";
import cancelCross from "../../assets/cancel.png";

import Input from "../input/Input";
import { ModalActions } from "../../store/modal-context";
import MyButton from "../UI/MyButton";

const emailReducer = (prevState, action) => {
  if (action.type === "USER_EMAIL") {
    return { value: action.val, isValid: action.val.trim().length === 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length === 6,
    };
  }
};

const passwordReducer = (prevState, action) => {
  if (action.type === "USER_PASS") {
    return { value: action.val, isValid: action.val.trim().length > 0 };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: prevState.value,
      isValid: prevState.value.trim().length > 0,
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

  let username = "000001";
  let password = "@EurpUe*9X5KhReSjdAjC@sbeyi7Ex";

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      axios
        .post(
          "http://itmochart.netmvas.com:5000/user/login",
          `username=${emailState.value}&password=${passState.value}&scope=&client_id=&client_secret=`,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((res) => {
          localStorage.setItem("token", res.data.access_token);
          // successChecker(res);
          // Here we should get information about user with this jwt
        })
        .catch((error) => {
          // errorChecker(JSON.parse(error.request.response));
        });
    }
  };

  return (
    <Modal>
      <form id={"formData"} onSubmit={submitHandler}>
        <h1>Войти в личный кабинет</h1>
        <Input
          ref={emailInputRef}
          state={emailState}
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
