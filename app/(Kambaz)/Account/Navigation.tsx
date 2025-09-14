import Link from "next/link";
export default function AccountNavigation() {
 return (
  <ul>
    <li>
      <Link href="Signin"> Sign In </Link>
    </li>
    <li>
      <Link href="Signup"> Sign Up </Link>
    </li>
    <li>
      <Link href="Profile"> Profile </Link>
    </li>
  </ul>
);}
