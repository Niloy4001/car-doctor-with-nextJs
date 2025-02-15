// import { MongoClient } from "mongodb";

// const uri = process.env.MONGODB_URI;

// if (!uri) {
//   throw new Error("MongoDB URI is missing from .env.local");
// }

// const client = new MongoClient(uri);
// const connectDB = async () => {
//   if (!client.topology || !client.topology.isConnected()) {
//     await client.connect();
//   }
//   return client.db();
// };

// export default connectDB;
