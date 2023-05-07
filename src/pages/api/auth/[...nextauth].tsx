import NextAuth, { Account, Profile, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import type { NextAuthOptions } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import api from "@/utils/api";
import MongoClient from "@/lib/mongodb";

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
        const res = await api.post(`api/auth/login`, {
          name: params.user.name,
          email: params.user.email,
          image: params.user.image,
          provider: params.account?.provider,
        });
        return true;
      } catch (err) {
        console.log(err);
        return false;
      }
    },
    session: async (params: any) => {
      if (!params.session) return;
      if (params.session.user.isConfirmed) return params.session;
      const db = (await MongoClient).db("minha-festa-db");
      const usersCollection = db.collection("users");
      const userData = await usersCollection.findOne({
        email: params.session.user.email,
      });
      params.session.user.isConfirmed = userData?.isConfirmed || false;
      return params.session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "",
};

export default NextAuth(authOptions);
