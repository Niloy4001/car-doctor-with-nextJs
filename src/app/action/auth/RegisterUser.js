import dbConnect from "@/lib/dbConnect";

export const RegisterUser = async (payload) => {
    const userCollection = dbConnect("userCollection")
    const result = await userCollection.insertOne(payload)
  console.log(result);
};
