import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
import { Post } from "@/lib/models";

export const GET = async (request) => {
  try {
    connectToDb();
    const posts = await Post.find({});
    return NextResponse.json(posts);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Posts!");
  }
};
