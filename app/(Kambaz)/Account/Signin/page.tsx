import Link from "next/link";
export default function Signin() {
 return (
   <div id="wd-signin-screen">
     <h3>Sign in</h3>
     <input defaultValue="alice123" placeholder="username" /> <br />
     <input defaultValue="123password" placeholder="password" type="password" />
     <br />
     <Link href="/Dashboard"> Sign in </Link> <br />
     <Link href="Signup"> Sign up </Link>
   </div>
);}
