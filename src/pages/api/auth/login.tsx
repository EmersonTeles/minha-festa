import type { NextApiRequest, NextApiResponse } from "next";
import MongoClient from "@/lib/mongodb";
import { getISOStringWithTimezone } from "@/utils/time";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  const { name, email, image, provider } = req.body;

  const db = (await MongoClient).db("minha-festa-db");
  const usersCollection = db.collection("users");
  const user = await usersCollection.findOne({ email: email });

  if (user) {
    return res.status(200).json(user);
  } else {
    try {
      const result = usersCollection.insertOne({
        name: name,
        email: email,
        image: image,
        provider: provider,
        confirmed: false,
        confirmedAt: null,
        createdAt: getISOStringWithTimezone(),
      });
      return res.status(200).json(result);
    } catch (err) {
      console.log("erro login:", err);
      return res.status(400).json(err);
    }
  }
}
