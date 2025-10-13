"use client";
import { useParams } from "next/navigation";
import * as db from "../../../../Database"

import { Card, Col, Form, FormCheck, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";

export default function AssignmentEditor() {
    const { cid, aid } = useParams();
    const assignment = db.assignments.find((a: any) => a._id === aid && a.course === cid);
    if (!assignment) {
        return <div>{aid}Assignment not found</div>;
    }
    return (
        <div id="wd-assignments-editor">
            <Form>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}> Assignment Name </FormLabel>
                    <Col sm={10}>
                        <FormControl type="text" defaultValue={assignment.title} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}></FormLabel>
                    <Col sm={10}>
                        <FormControl as="textarea" style={{ height: "100px" }} defaultValue={
                            assignment.description
                        } />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}> Points </FormLabel>
                    <Col sm={10}>
                        <FormControl type="number" defaultValue={assignment.points} />
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
                                    <FormControl type="date" defaultValue={assignment.available_date} min="2024-01-01" max="2025-12-31" />
                                </Col>
                                <Col>
                                    <FormLabel><b>Until</b></FormLabel>
                                    <FormControl type="date" defaultValue={assignment.due_date} min="2024-01-01" max="2025-12-31" />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}
