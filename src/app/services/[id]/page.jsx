import BannerImg from "@/components/BannerImg";
// import connectDB from "@/lib/db";
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import Image from "next/image";

const page = async ({ params }) => {
  const { id } = await params;
    const service = await dbConnect("services").findOne({
      _id: new ObjectId(id),
    });
//   const db = await connectDB();
//   const collection = db.collection("services");
//   const service = await collection.findOne({ _id: new ObjectId(id) });
//   //   console.log(service);

  return (
    <div className="container">
      <BannerImg
        title={"Service Details"}
        img={"/assets/images/checkout/checkout.png"}
      ></BannerImg>
      <div className="mb-28"></div>
      {/* content */}
      <div className="grid md:grid-cols-12 gap-6">
        {/* left div */}
        <div className="col-span-8">
          <div className="mb-12">
            <Image
              src={service?.img}
              alt={service.title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "400px" }}
            ></Image>
          </div>
          <h1 className="font-bold text-3xl text-[#151515] mb-7">
            {service?.title}
          </h1>
          <p>{service?.description}</p>
        </div>
        {/* right div */}
        <div className="col-span-4">
          <div>
            <p className="font-bold text-3xl text-[#151515] mb-7">
              Price : ${service.price}
            </p>
            <button className="text-white bg-[#FF3811] hover:bg-orange-700 btn w-full">
              Proceed Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
