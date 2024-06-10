import { getUsers } from "@/lib/data";
import styles from "./adminUsers.module.css";
import Image from "next/image";
import { deleteUser } from "@/lib/actions";

const AdminUsers = async() => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id} className={styles.user}>
          <div className={styles.detail}>
            <Image
              src={user?.img || "/men-avatar.png"}
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.userTitle}>{user.username}</span>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.deleteButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  )
};

export default AdminUsers;
