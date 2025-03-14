
// import React, { useState } from 'react'
import RegisterForm from './components/RegisterForm'
import login from '../../../public/assets/images/login/login.svg'
import Image from 'next/image'

const page = () => {
   
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
    <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg w-full">
      <div className="col-span-1 bg-gray-100 flex items-center justify-center p-8">
        <Image src={login} width={300} height={300} alt='image'></Image>
        {/* <img src={login} alt="Illustration" /> */}
      </div>
      <div className="col-span-1 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
        

       <RegisterForm></RegisterForm>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-orange-500 font-semibold">Sign Up</a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default page