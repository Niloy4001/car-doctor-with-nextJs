"use client"
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  const session = useSession();
  // console.log(session.status ,session.data);
  

  const menu = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
     
    </>
  );
  return (
    <div className="w-[90%] mx-auto">
      <div className="navbar bg-base-100 py-4 md:py-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow font-medium text-xl"
            >
              {menu}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl"><Image src={"/assets/logo.svg"} width={110} alt="logo" height={90}></Image></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-xl">
            {menu}
          </ul>
        </div>
        <div className="navbar-end">
          {session.status == 'authenticated' ?
           <><button onClick={()=>signOut()} className="btn">Log Out</button></>
           :
            <>
            <Link href={"/login"} className="btn">LogIn</Link>
            <Link href={"/register"} className="btn">Register</Link>
            </>}
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
