import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>nextdash</div>
      <div className={styles.text}>
        NextDash visionary ideas studio © All rights reserved
      </div>
    </div>
  );
};
export default Footer;
