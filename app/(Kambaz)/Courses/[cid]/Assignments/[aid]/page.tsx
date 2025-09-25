import { Col, Form, FormControl, FormLabel, FormSelect, Row } from "react-bootstrap";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <Form>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}> Assignment Name </FormLabel>
                    <Col sm={10}>
                        <FormControl type="text" defaultValue="A1 - ENV + HTML" />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}></FormLabel>
                    <Col sm={10}>
                        <FormControl as="textarea" style={{ height: "100px" }} defaultValue={
                            `The assignment is available online. Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section. Links to each of the lab assignments. Link to the Kambaz application. Links to all relevant source code repositories. The Kambaz application should include a link to navigate back to the landing page.`} />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}> Points </FormLabel>
                    <Col sm={10}>
                        <FormControl type="number" defaultValue="100" />
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
                        <FormSelect>
                            <option value="ONLINE" defaultChecked>Online</option>
                            <option value="INPERSON">In-person</option>
                        </FormSelect>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <FormLabel className="text-sm-end" column sm={2}> Assign </FormLabel>
                    <Col sm={10}>
                        <FormLabel>Assign to</FormLabel>
                        <FormControl type="text" defaultValue="Everyone" />
                        <FormLabel>Due</FormLabel>
                        <FormControl type="date" defaultValue="2024-05-13" min="2024-01-01" max="2025-12-31" />
                        <FormLabel>Available From</FormLabel>
                        <FormControl type="date" defaultValue="2024-05-06" min="2024-01-01" max="2025-12-31" />
                        <FormLabel>Until</FormLabel>
                        <FormControl type="date" defaultValue="2024-05-20" min="2024-01-01" max="2025-12-31" />

                    </Col>
                </Row>
            </Form>
        </div>
    );
}
