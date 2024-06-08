import Links from "./links/Links";
import styles from "./navbar.module.css";
import Link from "next/link";
import { auth } from "@/lib/auth";

const NavBar = async () => {
  const session = await auth();
  console.log("session", session);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        NextDash
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};
export default NavBar;
