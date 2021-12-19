import classes from "./Store.module.css";
import axios from "axios";
import Item from "./Item";
import { useState, useEffect } from "react";
import StoreModal from "./StoreModal";
function Store() {
  const [confirmModalShown, setConfirmModal] = useState(false);
  const [currentItems, setcurrentItems] = useState([]);
  const [currentId, setcurrentId] = useState("");

  const shownConfirmModalHandler = (event) => {
    setConfirmModal(true);
    console.log(event.target);
  };

  const closeConfirmModalHandler = () => {
    setConfirmModal(false);
  };

  useEffect(() => {
    const apiUrl = `http://itmochart.netmvas.com:5000/service/rewards`;
    axios.get(apiUrl).then((resp) => {
      const rewards = resp.data.rewards;
      setcurrentItems(rewards);
    });
  }, [currentItems]);

  return (
    <section className={classes.listOfItem}>
      {currentItems.map((item) => {
        return (
          <Item
            key={item.id}
            openModal={shownConfirmModalHandler}
            id={item.id}
            name={item.name}
            des={item.description}
            img={item.thumbnail}
            ammount={item.price}
          />
        );
      })}
      {confirmModalShown && (
        <StoreModal
          id={currentId}
          close={closeConfirmModalHandler}
        ></StoreModal>
      )}
    </section>
  );
}

export default Store;
