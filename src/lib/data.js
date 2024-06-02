import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";

//TEMPORARY DATA
// const users = [
//   { id: 1, name: "John Perera" },
//   { id: 2, name: "Jane Fernando" },
//   { id: 3, name: "Mark Anthony" },
//   { id: 4, name: "Samantha Perera" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "This is the body of post 1", userId: 1 },
//   { id: 2, title: "Post 2", body: "This is the body of post 2", userId: 2 },
//   { id: 3, title: "Post 3", body: "This is the body of post 3", userId: 3 },
//   { id: 4, title: "Post 4", body: "This is the body of post 4", userId: 4 },
// ];

export const getPosts = async () => {
  // return posts;
  //keep it as above util data fetched from the database

  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts");
  }
};

export const getPost = async (slug) => {
  // return posts.find((post) => post.id === parseInt(id));
  //keep it as above until data fetched from the database
  try {
    connectToDb();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post");
  }
};

export const getUser = async (id) => {
  // return users.find((user) => user.id === id);
  //keep it as above until data fetched from the database
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users");
  }
};