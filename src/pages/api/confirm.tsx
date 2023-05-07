import type { NextApiRequest, NextApiResponse } from "next";
import MongoClient from "@/lib/mongodb";
import { getISOStringWithTimezone } from "@/utils/time";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;
  if (method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { hasCar, neighborhood, days, spouse, user } = req.body;
  const db = (await MongoClient).db("minha-festa-db");
  const users = db.collection("users");
  try {
    const result = await users.updateOne(
      { email: user.email },
      {
        $set: {
          isConfirmed: true,
          confirmedAt: getISOStringWithTimezone(),
          confirmation_data: {
            hasCar: hasCar == "True" ? true : false,
            neighborhood: neighborhood,
            days: days,
            spouse: spouse == "True" ? true : false,
          },
        },
      }
    );
    return res.status(200).json(result);
  } catch (err) {
    return res.status(400).json(err);
  }
}
