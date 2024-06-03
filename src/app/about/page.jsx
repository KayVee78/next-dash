import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  // console.log("Check if this is logged in  client or server console");

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Studio</h2>
        <h1 className={styles.title}>
          Transforming visions into reality with innovative digital solutions
          and creativity
        </h1>
        <p className={styles.desc}>
          We are dedicated to transforming visions into reality with innovative
          digital solutions and creativity. Our team of experts leverages
          cutting-edge technology and imaginative thinking to deliver
          exceptional results that exceed expectations. Partner with us to
          experience the power of creativity and innovation in the digital
          world.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K +</h1>
            <p>Years of experience</p>
          </div>
          <div className={styles.box}>
            <h1>1K +</h1>
            <p>Clients</p>
          </div>
          <div className={styles.box}>
            <h1>1.5K +</h1>
            <p>Projects</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About Image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
