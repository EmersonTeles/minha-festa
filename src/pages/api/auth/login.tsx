import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const db_url = `mongodb+srv://emersonlteles:${process.env.DB_PASSWORD}@cluster0.ww6u94o.mongodb.net/?retryWrites=true&w=majority`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { name, email, image } = req.body;

  const client = new MongoClient(db_url, {});

  await client.connect();

  const db = client.db("minha-festa-db");
  const users = db.collection("users");
  const result = users.insertOne({
    name: name,
    email: email,
    image: image,
  });
  return res.status(200).json(result);
}
