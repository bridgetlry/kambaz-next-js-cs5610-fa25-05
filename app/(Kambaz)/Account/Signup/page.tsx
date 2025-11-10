"use client";
import * as client from "../client";
import React, { useState } from "react";
import Link from "next/link";
import { FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { redirect } from "next/navigation";
export default function Signup() {

  const [user, setUser] = useState<any>({});

  const dispatch = useDispatch();

  const signup = async () => {
    const currentUser = await client.signup(user);
    dispatch(setCurrentUser(currentUser));
    redirect("/Account/Profile");
  };

  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      <FormControl value={user.username}
        onChange={(e) => setUser({
          ...user,
          username: e.target.value
        })} />
      <FormControl value={user.password} type="password"
        onChange={(e) => setUser({
          ...user,
          password: e.target.value
        })} />
      <button className="btn btn-primary" onClick={signup}> Sign up </button><br />
      <Link href="/Account/Signin">Sign in</Link>
    </div>);
}