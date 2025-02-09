
// import React, { useState } from 'react'
import RegisterForm from './components/RegisterForm'

const page = () => {
   
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
    <div className="flex bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="w-1/2 bg-gray-100 flex items-center justify-center p-8">
        <img src="https://via.placeholder.com/300" alt="Illustration" className="w-3/4" />
      </div>
      <div className="w-1/2 p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
        

       <RegisterForm></RegisterForm>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account? <a href="/login" className="text-orange-500 font-semibold">Login</a>
        </p>
      </div>
    </div>
  </div>
  )
}

export default page