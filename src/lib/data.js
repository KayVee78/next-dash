import { parse } from "next/dist/build/swc";

//TEMPORARY DATA
const users = [
  { id: 1, name: "John Perera" },
  { id: 2, name: "Jane Fernando" },
  { id: 3, name: "Mark Anthony" },
  { id: 4, name: "Samantha Perera" },
];

const posts = [
  { id: 1, title: "Post 1", body: "This is the body of post 1", userId: 1 },
  { id: 2, title: "Post 2", body: "This is the body of post 2", userId: 2 },
  { id: 3, title: "Post 3", body: "This is the body of post 3", userId: 3 },
  { id: 4, title: "Post 4", body: "This is the body of post 4", userId: 4 },
];

export const getPosts = async() => {
  return posts;
  //keep it as above util data fetched from the database
};

export const getPost = async(id) => {
  return posts.find((post) => post.id == parseInt(id));
  //keep it as above until data fetched from the database
};

export const getUser = async(id) => {
  return users.find((user) => user.id == parseInt(id));
  //keep it as above until data fetched from the database
};
