import { MongoClient, ServerApiVersion } from "mongodb";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
export default function dbConnect(collectionName){
    const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.hcojg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1`;
    const client = new MongoClient(uri, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
        }
      });

      return client.db("car-doctor").collection(collectionName)
     
}
