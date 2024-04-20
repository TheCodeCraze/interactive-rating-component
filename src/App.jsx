import { useState } from "react";
import styles from "./App.module.css";

export const App = () => {
  const [rating, setRating] = useState(null);
  const [submit, setSubmit] = useState(false);

  const handleClick = (e) => {
    setRating(e.target.textContent);
  };

  const handleSubmit = () => {
    if (!rating) {
      alert("Select any rating to submit!");
      return;
    }
    setSubmit(true);
  };

  if (!submit) {
    return (
      <main className={styles["card-rating"]}>
        <div className={styles.icon}>
          <img src="/icon-star.svg" alt="Star illustration" />
        </div>
        <h1 className={styles.title}>How did we do?</h1>
        <p className={styles.description}>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className={styles.ratings}>
          <div
            className={`${styles.rating} ${
              rating === "1" ? styles.active : null
            }`}
            onClick={handleClick}
          >
            1
          </div>
          <div
            className={`${styles.rating} ${
              rating === "2" ? styles.active : null
            }`}
            onClick={handleClick}
          >
            2
          </div>
          <div
            className={`${styles.rating} ${
              rating === "3" ? styles.active : null
            }`}
            onClick={handleClick}
          >
            3
          </div>
          <div
            className={`${styles.rating} ${
              rating === "4" ? styles.active : null
            }`}
            onClick={handleClick}
          >
            4
          </div>
          <div
            className={`${styles.rating} ${
              rating === "5" ? styles.active : null
            }`}
            onClick={handleClick}
          >
            5
          </div>
        </div>
        <button className={styles.cta} onClick={handleSubmit}>
          Submit
        </button>
      </main>
    );
  } else {
    return (
      <main className={styles["card-thankyou"]}>
        <img
          src="/illustration-thank-you.svg"
          alt="Thank you illustration"
          className={styles.image}
        />
        <div className={styles["ratings-given"]}>
          You selected {rating} out of 5
        </div>
        <h1 className={styles.title}>Thank you!</h1>
        <p className={styles.description}>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </main>
    );
  }
};
