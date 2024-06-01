import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import Facebook from "next-auth/providers/facebook";
import clientPromise from "./lib/clientPromise";
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Facebook({
      clientId: "991797515912171",
      clientSecret: "afaa08d2b3114e319585e8ace1da4a6e",
    }),
    CredentialsProvider({
      async authorize(credentials, req) {
        return credentials;
      },
    }),
  ],
});
