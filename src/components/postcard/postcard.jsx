import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

//to get the postcards horizontally and when the screen hasn't enough space, to move to the next row (use flex box and flex wrap)
const PostCard = ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/19562913/pexels-photo-19562913/free-photo-of-scenic-view-of-a-mountain-range.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Mountain Range</h1>
        <p className={styles.desc}>
          The majestic snow-capped mountain peaks glisten under the sun,
          surrounded by serene, pristine landscapes, creating a breathtaking,
          tranquil view.
        </p>
        <Link className={styles.link} href="/blog/post">Read More</Link>
      </div>
    </div>
  );
};

export default PostCard;
