import styles from "./postUser.module.css";
import { getUser } from "@/lib/data";
import Image from "next/image";

//FETCHING DATA USING AN API
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// };

const PostUser = async ({ userId }) => {
  //FETCHING DATA USING AN API
  //   const user = await getData(userId);

  //FETCHING DATA WITHOUT  USING AN API
  const user = await getUser(userId);
  return (
    <div className={styles.container}>
      <Image
        src={user?.img ? user.img : "/men-avatar.png"}
        className={styles.avatar}
        alt=""
        width={50}
        height={50}
      />

      <div className={styles.text}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user?.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
