"use client"
import { signIn } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function SocialLogin() {
    const handleSocialLogin = async(provider)=>{
        await signIn(provider,{redirect:false});
    }
  return (
    <div className="flex justify-center items-center py-4 gap-5">
       <span className="text-2xl" onClick={()=>handleSocialLogin("google")}><FcGoogle /></span>
       <span className="text-2xl" onClick={()=>handleSocialLogin("github")}><FaGithub /></span> 
        
    </div>
  )
}
