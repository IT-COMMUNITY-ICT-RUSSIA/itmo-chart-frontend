import classes from "./Store.module.css";

import Item from "./Item";
import { useState } from "react";
import StoreModal from "./StoreModal";
function Store() {
  const [confirmModalShown, setConfirmModal] = useState(false);

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
  return (
    <section className={classes.listOfItem}>
      {data.map((item) => {
        return (
          <Item
            openModal={shownConfirmModalHandler}
            id={item.id}
            name={item.name}
            img={item.img}
            ammount={item.ammount}
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
