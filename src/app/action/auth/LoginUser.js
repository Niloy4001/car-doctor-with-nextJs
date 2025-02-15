"use server";
import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export default async function LoginUser(payload) {
  const { email, password } = payload;
 console.log('paylod from server');
 
//  check password or email field empty or not
  if (!email || !password) {
    return null;
  }
  
//   cheking is the user exist on db or not
  const user = await dbConnect("userCollection").findOne({ email });
  if (!user) {
    return null;
  }
  
  
// checking the password matching with exact or not
  const isPasswordOk = await bcrypt.compare(password ,user?.password );
  if (!isPasswordOk) {        
    return null;
  }
  
 
  return user;
}




// I did mistake on bcrypt.compare()
// here i followed wrong parameter order that's why I got stuck for 2 hourse 
