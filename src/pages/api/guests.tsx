import type { NextApiRequest, NextApiResponse } from "next";
import MongoClient from "@/lib/mongodb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const db = (await MongoClient).db("minha-festa-db");
  const users = db.collection("users");
  const confirmedUsers: object[] = await users
    .find(
      { isConfirmed: true },
      { projection: { name: 1, image: 1, isConfirmed: 1, confirmation_data: 1 } }
    )
    .toArray();
  try {
    return res.status(200).json(confirmedUsers);
  } catch (err) {
    return res.status(400).json(err);
  }
}
