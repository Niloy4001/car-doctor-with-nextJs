"use client"
// import { RegisterUser } from '@/app/action/auth/RegisterUser';
import React, { useState } from 'react'

const RegisterForm = () => {
   
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // const form = e.target.value;
        const name = e.target.name.value
        const email = e.target.email.value 
        const password = e.target.password.value
        const formData = {name,email,password}
        console.log( formData);
      //  RegisterUser(formData)
      };
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input 
              type="text" 
              name="name" 
              // value={formData.name} 
              // onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
              placeholder="Your name" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              // value={formData.email} 
              // onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
              placeholder="Your email" 
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Confirm Password</label>
            <input 
              type="password" 
              name="password" 
              // value={formData.password} 
              // onChange={handleChange} 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" 
              placeholder="Your password" 
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition">
            Sign Up
          </button>
        </form>
    </div>
  )
}

export default RegisterForm