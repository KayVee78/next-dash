import styles from "./home.module.css";
import Image from "next/image";
import Link from "next/link";

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
          <Link href="/about">
            <button className={`${styles.button} ${styles.buttonLeanMore}`}>
              Learn More
            </button>
          </Link>
          <Link href="/contact">
            <button className={styles.button}>Contact</button>
          </Link>
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
