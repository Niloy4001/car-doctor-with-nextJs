import Heading from "@/components/Heading";
import { FaArrowRight } from "react-icons/fa";
import dbConnect from "@/lib/dbConnect";
import React from "react";

const Services = async () => {
  const data = await dbConnect("services").find().toArray();
  console.log(data);

  return (
    <div className="conatainer">
      <Heading
        top={"Service"}
        middle={"Our Service Area"}
        bottom={
          "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        }
      ></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center bg-gray-100">
        {data.map((service) => (
          <div className=" bg-white rounded-lg shadow-md overflow-hidden w-full" key={service._id}>
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="text-red-500 font-semibold text-md mt-2">
                Price : ${service.price}
              </p>
              <div className="flex justify-end mt-2">
                <FaArrowRight  className="text-red-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
