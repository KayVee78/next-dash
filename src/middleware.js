import NextAuth from "next-auth";
import { authConfig } from "./lib/auth.config";

//using this configuration in auth.config.js, we are returning false in callbacks (So before logging in we won't be able see any content
// of Home, about, blog pages) since it will redirect the login page from whatever nav button we click to access

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
