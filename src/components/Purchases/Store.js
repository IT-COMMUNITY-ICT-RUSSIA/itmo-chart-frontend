import classes from "./Store.module.css";

import Item from "./Item";
function Store() {
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
            id={item.id}
            name={item.name}
            img={item.img}
            ammount={item.ammount}
          />
        );
      })}
    </section>
  );
}

export default Store;
