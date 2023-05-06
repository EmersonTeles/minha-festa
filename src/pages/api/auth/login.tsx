import type { NextApiRequest, NextApiResponse } from "next";
import MongoClient from "@/lib/mongodb";
import { getISOStringWithTimezone } from "@/utils/time";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { name, email, image } = req.body;

  const db = (await MongoClient).db("minha-festa-db");
  const users = db.collection("users");
  try {
    const result = users.insertOne({
      name: name,
      email: email,
      image: image,
      createdAt: getISOStringWithTimezone(),
    });
    return res.status(200).json(result);
  } catch (err) {
    console.log("erro login:", err);
    return res.status(400).json(err);
  }
}
