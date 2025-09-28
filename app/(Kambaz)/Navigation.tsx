'use client';
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import Link from "next/link";
import React from "react";
import { usePathname } from 'next/navigation';

export default function KambazNavigation() {
  const pathname = usePathname();
  return (
    <ListGroup className="rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2" style={{ width: 110 }}
      id="wd-kambaz-navigation">
      <ListGroupItem className="bg-black border-0 text-center" as="a"
        target="_blank" href="https://www.northeastern.edu/" id="wd-neu-link">
        <img src="/images/NEU.svg" width="75px" alt="Northeastern University" />
      </ListGroupItem><br />
      <ListGroupItem className={pathname.includes('/Account') ? "border-0 bg-white text-center" : "border-0 bg-black text-center"}>
        <Link href="/Account" id="wd-account-link" className={pathname.includes('/Account') ? "text-danger text-decoration-none" : "text-white text-decoration-none"}>
          <FaRegCircleUser className={pathname.includes('/Account') ? "fs-1 text-danger" : "fs-1 text-white"} />
          <br />
          Account
        </Link>
      </ListGroupItem><br />
      <ListGroupItem className={pathname.includes('/Dashboard') ? "border-0 bg-white text-center" : "border-0 bg-black text-center"}>
        <Link href="/Dashboard" id="wd-dashboard-link" className={pathname.includes('/Dashboard') ? "text-danger text-decoration-none" : "text-white text-decoration-none"}>
          <AiOutlineDashboard className={pathname.includes('/Dashboard') ? "fs-1 text-danger" : "fs-1 text-danger"} />
          <br />
          Dashboard
        </Link>
      </ListGroupItem><br />
      <ListGroupItem className={pathname.includes('/Courses') ? "border-0 bg-white text-center" : "border-0 bg-black text-center"}>
        <Link href="/Courses/1234/Home" id="wd-course-link" className={pathname.includes('/Courses') ? "text-danger text-decoration-none" : "text-white text-decoration-none"}>
          <LiaBookSolid className={pathname.includes('/Courses') ? "fs-1 text-danger" : "fs-1 text-danger"} />
          <br />
          Courses
        </Link>
      </ListGroupItem><br />
      <ListGroupItem className={pathname.includes('/Calendar') ? "border-0 bg-white text-center" : "border-0 bg-black text-center"}>
        <Link href="/Calendar" id="wd-calendar-link" className={pathname.includes('/Calendar') ? "text-danger text-decoration-none" : "text-white text-decoration-none"}>
          <IoCalendarOutline className={pathname.includes('/Calendar') ? "fs-1 text-danger" : "fs-1 text-danger"} />
          <br />
          Calendar
        </Link>
      </ListGroupItem><br />
      <ListGroupItem className={pathname.includes('/Inbox') ? "border-0 bg-white text-center" : "border-0 bg-black text-center"}>
        <Link href="/Inbox" id="wd-inbox-link" className={pathname.includes('/Inbox') ? "text-danger text-decoration-none" : "text-white text-decoration-none"}>
          <FaInbox className={pathname.includes('/Inbox') ? "fs-1 text-danger" : "fs-1 text-danger"} />
          <br />
          Inbox
        </Link>
      </ListGroupItem><br />
      <ListGroupItem className={pathname.includes('/Labs') ? "border-0 bg-white text-center" : "border-0 bg-black text-center"}>
        <Link href="/Labs" id="wd-settings-link" className={pathname.includes('/Labs') ? "text-danger text-decoration-none" : "text-white text-decoration-none"}>
          <LiaCogSolid className={pathname.includes('/Labs') ? "fs-1 text-danger" : "fs-1 text-danger"} />
          <br />
          Labs
        </Link>
      </ListGroupItem>
    </ListGroup>
  );
}