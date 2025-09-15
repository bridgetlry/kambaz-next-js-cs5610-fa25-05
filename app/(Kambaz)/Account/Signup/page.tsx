import React from "react";
import Link from "next/link";
export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
      <input defaultValue="alice123" placeholder="username" /><br/>
      <input defaultValue="123password" placeholder="password" type="password" /><br/>
      <input defaultValue="123password" placeholder="verify password" type="password" /><br/>
      <Link href="Profile" > Sign up </Link><br />
      <Link href="Signin" >Sign in</Link>
    </div>
);}
