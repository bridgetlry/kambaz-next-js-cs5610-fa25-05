"use client";
import { useParams, useRouter } from "next/navigation";
import * as db from "../../../../Database"

import { useState } from "react";
import { Button, Card, Col, Form, FormCheck, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateAssignment } from "../reducer";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = db.assignments.find((a: any) => a._id === aid && a.course === cid);
    if (!assignment) {
        return <div>{aid}Assignment not found</div>;
    }
    const dispatch = useDispatch();
    const router = useRouter();
    const [assignmentState, setAssignment] = useState(assignment);
    return (
        <div id="wd-assignments-editor">
            <Form>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}> Assignment Name </FormLabel>
                    <Col sm={10}>
                        <FormControl type="text" value={assignmentState.title} onChange={(e) => setAssignment({...assignmentState, title: e.target.value})} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}></FormLabel>
                    <Col sm={10}>
                        <FormControl as="textarea" style={{ height: "100px" }} value={assignmentState.description} onChange={(e) => setAssignment({...assignmentState, description: e.target.value})} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}> Points </FormLabel>
                    <Col sm={10}>
                        <FormControl type="number" value={assignmentState.points} onChange={(e) => setAssignment({...assignmentState, points: Number(e.target.value)})} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}> Assignment Group </FormLabel>
                    <Col sm={10}>
                        <FormSelect>
                            <option value="ASSIGNMENTS" defaultChecked>ASSIGNMENTS</option>
                            <option value="QUIZZES">QUIZZES</option>
                        </FormSelect>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}> Display Grade As </FormLabel>
                    <Col sm={10}>
                        <FormSelect>
                            <option value="PERCENTAGE" defaultChecked>PERCENTAGE</option>
                            <option value="FRACTION">FRACTION</option>
                        </FormSelect>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}> Submission Type </FormLabel>
                    <Col sm={10}>
                        <Card className="p-3">
                            <FormSelect className="mb-2">
                                <option value="ONLINE" defaultChecked>Online</option>
                                <option value="INPERSON">In-person</option>
                            </FormSelect>
                            <h6><b>Online Entry Options</b></h6>
                            <FormCheck defaultChecked={false} label="Text Entry" />
                            <FormCheck defaultChecked={true} label="Website URL" />
                            <FormCheck defaultChecked={false} label="Media Recordings" />
                            <FormCheck defaultChecked={false} label="Student Annotation" />
                            <FormCheck defaultChecked={false} label="File Uploads" />
                        </Card>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}> Assign </FormLabel>
                    <Col sm={10}>
                        <Card className="p-3">
                            <FormLabel><b>Assign to</b></FormLabel>
                            <FormControl type="text" defaultValue="Everyone" />
                            <FormLabel><b>Due</b></FormLabel>
                            <FormControl type="date" defaultValue={assignment.due_date} min="2024-01-01" max="2025-12-31" />
                            <Row>
                                <Col>
                                    <FormLabel><b>Available From</b></FormLabel>
                                    <FormControl type="date" value={assignmentState.available_date} min="2024-01-01" max="2025-12-31" onChange={(e) => setAssignment({...assignmentState, available_date: e.target.value})}/>
                                </Col>
                                <Col>
                                    <FormLabel><b>Until</b></FormLabel>
                                    <FormControl type="date" value={assignmentState.due_date} min="2024-01-01" max="2025-12-31" onChange={(e) => setAssignment({...assignmentState, due_date: e.target.value})} />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Button onClick={async () => {
                    dispatch(updateAssignment(assignmentState));
                    router.push(`/Courses/${cid}/Assignments`);
                }} variant="primary" type="button">
                    Save
                </Button>
                <Button onClick={() =>
                    router.push(`/Courses/${cid}/Assignments`)
                } variant="secondary" type="button">Cancel
                </Button>
            </Form>
        </div>
    );
}
