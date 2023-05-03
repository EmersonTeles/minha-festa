import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider, { GithubProfile } from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
      async profile(profile) {
        console.log("google profile: ", profile);
        const res = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: profile.name,
            email: profile.email,
            image: profile.picture,
          }),
        });
        console.log("res google", res);
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
      async profile(profile) {
        console.log("github profile: ", profile);
        const res = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: profile.name,
            email: profile.email,
            image: profile.avatar_url,
          }),
        });
        console.log("res google", res);
        return {
          id: profile.id.toString(),
          name: profile.name,
          email: profile.email,
          image: profile.avatar_url,
        };
      },
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any) {
        console.log("credentials here", credentials);
        return {
          id: credentials.id,
          name: credentials.name,
          email: credentials.email,
          image: credentials.image,
        };
      },
    }),
  ],
  secret: process.env.SECRET || "",
};

export default NextAuth(authOptions);
