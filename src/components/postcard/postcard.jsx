import Image from "next/image";
import styles from "./postcard.module.css";
import Link from "next/link";

//to get the postcards horizontally and when the screen hasn't enough space, to move to the next row (use flex box and flex wrap)
const PostCard = async ({ post }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          {post.img && (
            <Image
              src={post.img}
              alt=""
              fill
              className={styles.img}
            />
          )}
        </div>
        <span className={styles.date}>{post?.createdAt}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
