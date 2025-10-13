"use client";
import Link from "next/link";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams } from "next/navigation";
import * as db from "../../../Database"

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;
    return (
        <div id="wd-assignments">
            <div>
                <FaMagnifyingGlass id="wd-search-icon" />
                <input placeholder="Search for Assignments" className="fa-magnifying-glass"
                    id="wd-search-assignment" />
            </div>

            <Button id="wd-add-assignment-group" className="wd-float-right" variant="danger">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />Assignment</Button>
            <Button id="wd-search-assigment-button" className="wd-float-right" variant="secondary">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />Group</Button>

            <br /><br />

            <ListGroup className="rounded-0" id="wd-assignments-sections">
                {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                        <ListGroupItem className="wd-assignment-list-item wd-lesson">
                            <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                                {assignment.title} <LessonControlButtons />
                            </Link>
                            <br />
                            {assignment.module} |
                            <b> Not available until </b> {assignment.available} |
                            <b> Due </b> {assignment.due} | {assignment.points} pts

                        </ListGroupItem>
                    ))}
            </ListGroup>
        </div>
    );
}
