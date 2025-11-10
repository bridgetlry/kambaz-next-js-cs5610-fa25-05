"use client";
import Link from "next/link";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { setAssignments, deleteAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import AssignmentCreator from "./[aid]/page";
import * as client from "../../client";

export default function Assignments() {
    const router = useRouter();
    const dispatch = useDispatch();
    let { cid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const fetchAssignments = async () => {
        const assignments = await client.findAssignmentsForCourse(cid as string);
        dispatch(setAssignments(assignments));
    };


    const onRemoveAssignment = async (assignmentId: string) => {
        await client.deleteAssignment(assignmentId);
        dispatch(setAssignments(assignments.filter((a: any) => a._id !== assignmentId)));
    };



    useEffect(() => {
        fetchAssignments();
    }, []);

    return (
        <div id="wd-assignments">
            <div>
                <FaMagnifyingGlass id="wd-search-icon" />
                <input placeholder="Search for Assignments" className="fa-magnifying-glass"
                    id="wd-search-assignment" />
            </div>

            <Button
                id="wd-add-assignment-group"
                className="wd-float-right"
                variant="danger"
                onClick={() => router.push(`/Courses/${cid}/Assignments/new`)}
            >
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </Button>
            <Button id="wd-search-assigment-button" className="wd-float-right" variant="secondary">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />Group</Button>

            <br /><br />

            <ListGroup className="rounded-0" id="wd-assignments-sections">
                {assignments
                    .filter((assignment: any) => assignment.course === cid)
                    .map((assignment: any) => (
                        <ListGroupItem key={assignment._id} className="wd-assignment-list-item wd-lesson">
                            <Link href={`/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link">
                                                            {assignment.title} <LessonControlButtons assignmentId={assignment._id} deleteAssignment={() => onRemoveAssignment(assignment._id)} />
                                                        </Link>
                            <br />
                            {assignment.module} |
                            <b> Not available until </b> {assignment.available} |
                            <b> Due </b> {assignment.due_date} | {assignment.points} pts

                        </ListGroupItem>
                    ))}
            </ListGroup>
        </div>
    );
}
