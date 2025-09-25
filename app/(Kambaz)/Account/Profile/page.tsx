import Link from "next/link";
import { Form, FormControl, FormSelect } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen">

      <h1>Profile</h1>
      <FormControl id="wd-username"
             placeholder="username"
             className="mb-2"/>
      <FormControl id="wd-password"
             placeholder="password" type="password"
             className="mb-2"/>
      <FormControl id="wd-firstname"
             placeholder="First Name"
             className="mb-2"/>
      <FormControl id="wd-lastname"
             placeholder="Last Name"
             className="mb-2"/>
      <FormControl id="wd-dob"
             placeholder="Date of Birth" type="date"
             className="mb-2"/>
      <FormControl id="wd-email"
             placeholder="Email" type="email"
             className="mb-2"/>
      <FormSelect id="wd-role" className="mb-2">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </FormSelect>
      <Link id="wd-signout-btn"
            href="/Account/Signin"
            className="btn btn-danger w-100 mb-2">
            Sign up </Link>
    </div>
);}
