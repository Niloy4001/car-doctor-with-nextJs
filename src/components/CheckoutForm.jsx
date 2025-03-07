"use client"
import { useSession } from "next-auth/react";
import React from "react";

const CheckoutForm = ({service}) => {
    const {data} = useSession()
    console.log(data);
    
  const handleSubmit =async (e) => {
    e.preventDefault()
    const form =await e.target;

    const name = data?.user?.name;
    const email = data?.user?.email;
    const phone = form.phone.value;
    const date = form.date.value;
    const dueAmount = service?.price;
    const presentAddress = form.presentAddress.value;
    const service_id = service?._id;
    const service_name = service?.title;
    const service_img = service?.img;
    
    

    const info = {name,email,phone,date,dueAmount,presentAddress,service_id,service_name,service_img}
    console.log(info);
    
  };
  return (
    <div>
        <div>
            <h2 className="text-center text-3xl mb-4">Book Service : {service?.title} </h2>
        </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md"
      >
        <div className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
            defaultValue={data?.user?.name}
              type="text"
              readOnly
              name="name"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Jamalia Cervantes"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
            defaultValue={data?.user?.email}
              type="email"
              readOnly
              name="email"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="lerekuvoj@mailinator.com"
            />
          </div>

          {/* Phone Field */}
          <div> 
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="+1 (965) 654-7098"
            />
          </div>

          {/* Date Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="20 Jul - 1975"
            />
          </div>

          {/* Due Amount Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Due amount
            </label>
            <input
            defaultValue={service?.price}
            readOnly
              type="number"
              name="dueAmount"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="878"
            />
          </div>

          {/* Present Address Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Present Address
            </label>
            <textarea
              name="presentAddress"
              className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-24"
              placeholder="Molestiae dolor volu huzliasiderjuoy580d69"
            />
          </div>

          {/* Order Confirm Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md transition-colors duration-200"
          >
            Order Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
