import NextAuth, { Account, Profile, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn(params: {
      user: User | AdapterUser;
      account: Account | null;
      profile?: Profile | undefined;
    }) {
      try {
        await fetch(`${process.env.NEXTAUTH_URL}api/auth/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: params.user.name,
            email: params.user.email,
            image: params.user.image,
          }),
        });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "",
};

export default NextAuth(authOptions);
