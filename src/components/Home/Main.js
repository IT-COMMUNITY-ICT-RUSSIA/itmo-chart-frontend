import classes from "./Main.module.css";
import MyButton from "../UI/MyButton";
import welcomeImg from "../../assets/welcome-img.jpg";

function Main() {
  return (
    <main>
      <section className={classes.welcome}>
        <div className={classes["left-content"]}>
          <h1>Отслеживай свои достижения и соревнуйся с друзьями!</h1>
          <p>
            Учись, получай токены и обменивай их на балы в своём факультете или
            на разные классные подарки от твоего любимого вуза
          </p>
          <MyButton isBig={true}> Войти</MyButton>
        </div>
        <div className={classes["right-content"]}>
          <img src={welcomeImg} />
          <div className={classes.circle}>
            <p>
              Стань
              <br /> первым на своём факультете
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
