import CheckoutForm from "@/components/CheckoutForm";
import React from "react";

export default async function Checkout({ params }) {
  const { id } = await params;
  const res = await fetch(`http://localhost:3002/api/service/${id}`);
  const service = await res.json();
  console.log(service);

  return (
    <div>
      <CheckoutForm service={service}></CheckoutForm>
    </div>
  );
}
