import PostCard from "@/components/postcard/postcard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

//FETCHING DATA USING AN API
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// };

const BlogPage = async () => {
  //FETCHING DATA USING AN API
  // const posts = await getData();

  //FETCHING DATA WITHOUT  USING AN API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
