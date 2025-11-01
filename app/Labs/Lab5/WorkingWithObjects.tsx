"use client";
import { useState } from "react";
import { FormCheck, FormControl } from "react-bootstrap";
const HTTP_SERVER
    = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`

    const [module, setModule] = useState({
        id: 1, name: "Learning NodeJS",
        description: "NodeJS is fun!",
        course: "CS5610",
    });

    const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`

    return (
        <div id="wd-working-with-objects">
            
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>

            {/* ASSIGNMENT */}
            <a href={`${HTTP_SERVER}/lab5/assignment`}>
                Get Assignment </a>

            <h4>Retrieving Properties</h4>
            <a href={`${HTTP_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />

            <h4>Modifying Properties</h4>
            <a href={`${ASSIGNMENT_API_URL}/title/
             ${assignment.title}`}>
                Update Title </a>
            <FormControl defaultValue={assignment.title}
                onChange={(e) => setAssignment(
                    { ...assignment, title: e.target.value })} />

            <a href={`${ASSIGNMENT_API_URL}/score/
             ${assignment.score}`}>
                Update Score </a>
            <FormControl defaultValue={assignment.score}
                onChange={(e) => setAssignment(
                    { ...assignment, score: parseInt(e.target.value)})} />

            <a href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Completed </a>
            <FormCheck type="checkbox" defaultChecked={assignment.completed}
                onChange={(e) => setAssignment(
                    { ...assignment, completed: e.target.checked})} />

            {/* MODULE */}
            <a href={`${HTTP_SERVER}/lab5/module`}>
                Get Module </a>
            <br />
            <a href={`${HTTP_SERVER}/lab5/module/name`}>
                Get Module Name </a>
            <br />
            <a href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Module Name </a>
            <FormControl defaultValue={module.name}
                onChange={(e) => setModule(
                    { ...module, name: e.target.value })} />
            

        </div>
    );
}
