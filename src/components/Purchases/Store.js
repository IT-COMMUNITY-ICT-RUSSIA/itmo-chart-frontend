import classes from "./Store.module.css";
import axios from "axios";
import Item from "./Item";
import { useState, useEffect } from "react";
import StoreModal from "./StoreModal";
function Store() {
  const [confirmModalShown, setConfirmModal] = useState(false);
  const [currentItems, setcurrentItems] = useState([]);

  const shownConfirmModalHandler = () => {
    setConfirmModal(true);
  };

  const closeConfirmModalHandler = () => {
    setConfirmModal(false);
  };
  const data = [
    {
      id: 12,
      ammount: 14,
      name: "футболка",
      img: "https://www.giftsgifts.ru/upload/iblock/f09/f099eb8c90e1033d698160c8c2abda6f.jpg",
    },
    {
      id: 12,
      ammount: 14,
      name: "футболка",
      img: "https://www.giftsgifts.ru/upload/iblock/f09/f099eb8c90e1033d698160c8c2abda6f.jpg",
    },
    {
      id: 12,
      ammount: 14,
      name: "футболка",
      img: "https://www.giftsgifts.ru/upload/iblock/f09/f099eb8c90e1033d698160c8c2abda6f.jpg",
    },
    {
      id: 12,
      ammount: 14,
      name: "футболка",
      img: "https://www.giftsgifts.ru/upload/iblock/f09/f099eb8c90e1033d698160c8c2abda6f.jpg",
    },
    {
      id: 12,
      ammount: 14,
      name: "футболка",
      img: "https://www.giftsgifts.ru/upload/iblock/f09/f099eb8c90e1033d698160c8c2abda6f.jpg",
    },
    {
      id: 12,
      ammount: 14,
      name: "футболка",
      img: "https://www.giftsgifts.ru/upload/iblock/f09/f099eb8c90e1033d698160c8c2abda6f.jpg",
    },
    {
      id: 12,
      ammount: 14,
      name: "футболка",
      img: "https://www.giftsgifts.ru/upload/iblock/f09/f099eb8c90e1033d698160c8c2abda6f.jpg",
    },
  ];

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
        <StoreModal close={closeConfirmModalHandler}></StoreModal>
      )}
    </section>
  );
}

export default Store;
