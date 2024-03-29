import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
  }

  interface Session {
    user: User & {
    };
    token: {
    };
  }
}