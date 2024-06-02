import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, max: 75 },
    password: { type: String, required: true, min: 6 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  { timeStamps: true }
); //when a user is created it will create the time created automatically);

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String },
    userId: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
  },
  { timeStamps: true }
);

// Creating users and posts
export const User = mongoose.models.User || mongoose.model("User", userSchema); //If there's an existing user use it, if not create a new user
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
