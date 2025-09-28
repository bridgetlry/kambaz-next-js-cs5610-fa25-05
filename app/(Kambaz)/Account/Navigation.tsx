'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
export default function AccountNavigation() {
  const pathname = usePathname();
 return (
  <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">

      <Link href="Signin" className={pathname.includes('Signin') ? "list-group-item active border-0" : "list-group-item text-danger border-0"}> Sign In </Link>

      <Link href="Signup" className={pathname.includes('Signup') ? "list-group-item active border-0" : "list-group-item text-danger border-0"}> Sign Up </Link>

      <Link href="Profile" className={pathname.includes('Profile') ? "list-group-item active border-0" : "list-group-item text-danger border-0"}> Profile </Link>
  </div>
);}
