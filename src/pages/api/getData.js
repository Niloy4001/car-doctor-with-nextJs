// import connectDB from "@/lib/db";

// export default async function handle(req, res) {
//   try {
//     const db = await connectDB(); // MongoDB কানেক্ট করা হচ্ছে
//     const collection = db.collection("services"); // নিজের collection নাম বসাও
//     const data = await collection.find({}).toArray();

//     res.status(200).json(data);
//   } catch (error) {
//     console.error("MongoDB Error:", error);
//     res.status(500).json({ error: "Failed to fetch data" });
//   }
// }
