import styles from "./home.module.css";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Visionary Ideas Studio</h1>
        <p className={styles.desc}>
          Bringing your ideas to life with innovative digital solutions and
          unmatched creative expertise.
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/home.gif" alt="" fill className={styles.homeImg} />
      </div>
    </div>
  );
};

export default HomePage;