import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

function Backdrop(props) {
  return <div onClick={props.closeModal} className={classes.backdrop}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

function Modal(props) {
  const portalPlace = document.querySelector("#overlays");
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeModal={props.close} />,
        portalPlace
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalPlace
      )}
    </>
  );
}

export default Modal;
