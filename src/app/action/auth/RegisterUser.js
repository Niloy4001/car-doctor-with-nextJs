"use server";

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const RegisterUser = async (payload) => {
  const userCollection = dbConnect("userCollection");

  // validation
  const user = await userCollection.findOne({ email: payload.email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(payload.password, 10);

    payload.password = hashedPassword;
    const result = await userCollection.insertOne(payload);
    const { acknowledged, insertedId } = result;
    return { acknowledged };
  }

  return { acknowledged: false };
};
