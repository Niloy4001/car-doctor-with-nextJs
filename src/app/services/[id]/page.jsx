import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";


const page = async({params}) => {
    const {id} =await params
    const service = await dbConnect("services").findOne({_id: new ObjectId(id)})
    console.log(service);
    
  return (
    <div>page</div>
  )
}

export default page