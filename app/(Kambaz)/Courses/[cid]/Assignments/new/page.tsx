"use client";
import { useParams, useRouter } from "next/navigation";
import { use, useState } from "react";

import { Button, Card, Col, Form, FormCheck, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addAssignment } from "../reducer";

export default function AssignmentCreator() {
    const router = useRouter();
    const { cid } = useParams();
    const dispatch = useDispatch();
    const [assignment, setAssignment] = useState({
        title: "",
        description: "",
        points: 0,
        course: cid,
        due_date: "",
        available_date: "",
    });
    return (
        <div id="wd-assignments-editor">
            <Form>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}> Assignment Name </FormLabel>
                    <Col sm={10}>
                        <FormControl type="text" defaultValue="" onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}></FormLabel>
                    <Col sm={10}>
                        <FormControl as="textarea" style={{ height: "100px" }} defaultValue="" onChange={(e) => setAssignment({...assignment, description: e.target.value})}/>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}> Points </FormLabel>
                    <Col sm={10}>
                        <FormControl type="number" defaultValue={0} onChange={(e) => setAssignment({...assignment, points: parseInt(e.target.value)})} />
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
                            <FormCheck defaultChecked={false} label="Website URL" />
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
                            <FormControl type="date" defaultValue="2024-01-01" min="2024-01-01" max="2025-12-31" 
                                onChange={(e) => setAssignment({...assignment, due_date: e.target.value})}/>
                            <Row>
                                <Col>
                                    <FormLabel><b>Available From</b></FormLabel>
                                    <FormControl type="date" defaultValue="2024-01-01" min="2024-01-01" max="2025-12-31" 
                                        onChange={(e) => setAssignment({...assignment, available_date: e.target.value})} />
                                </Col>
                                <Col>
                                    <FormLabel><b>Until</b></FormLabel>
                                    <FormControl type="date" defaultValue="2024-01-01" min="2024-01-01" max="2025-12-31" />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Button onClick={async () => {
                    console.log("About to dispatch assignment:", assignment);
                    dispatch(addAssignment(assignment));
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
