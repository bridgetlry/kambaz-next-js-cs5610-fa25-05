"use client"
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse } from "../Courses/reducer";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import * as db from "../Database";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import { addEnrollment, deleteEnrollment } from "./reducer";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = db;
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
  const [showEnrollments, setShowEnrollments] = useState(true);
  function isEnrolled(courseId: string, userId: string) {
    return enrollments.some((enrollment) =>
      enrollment.user === userId &&
      enrollment.course === courseId
    );
  }
  return (
    <div id="wd-dashboard">
      <button className="btn btn-primary float-end"
        id="wd-enrollments-click"
        onClick={() => setShowEnrollments(!showEnrollments)}>Enrollments</button>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={() => dispatch(addNewCourse(course))} > Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={() => dispatch(updateCourse(course))} id="wd-update-course-click">Update </button>
      </h5> <br />
      <FormControl value={course.name} className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <FormControl value={course.description} rows={3} as="textarea"
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {(showEnrollments ? courses
            .filter((course: { _id: string; }) =>
              enrollments.some(
                (enrollment) =>
                  enrollment.user === currentUser?._id &&
                  enrollment.course === course._id
              )) : courses)
            .map((course: { _id: any; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; description: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
              <Col className="wd-dashboard-course" style={{ width: "325px" }}>
                <Card>
                  <Link href={`/Courses/${course._id}`}
                    className="wd-dashboard-course-link text-decoration-none text-dark" >
                    <CardImg src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                    <CardBody className="card-body">
                      <CardTitle className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name} </CardTitle>
                      <CardText className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                        {course.description} </CardText>
                      <Button variant="primary"> Go </Button>
                      <Button variant={isEnrolled(course._id, currentUser?._id) ? "danger" : "success"}
                        id="wd-enrollment-course-click"
                        onClick={isEnrolled(course._id, currentUser?._id) ?
                          // Unenroll
                          (event) => {
                            event.preventDefault();
                            dispatch(deleteEnrollment(
                              enrollments.find(
                                (enrollment) =>
                                  enrollment.user === currentUser?._id &&
                                  enrollment.course === course._id
                              )?._id
                            ));
                          }
                          :
                          // Enroll
                          (event) => {
                            event.preventDefault();
                            dispatch(addEnrollment({
                              _id: uuidv4(),
                              user: currentUser?._id,
                              course: course._id
                            }));
                          }}
                      >
                        {isEnrolled(course._id, currentUser?._id) ? "Unenroll" : "Enroll"}
                      </Button>

                      <Button id="wd-edit-course-click"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                        className="btn btn-warning float-end">
                        Edit
                      </Button>

                      <Button onClick={(event) => {
                        event.preventDefault();
                        dispatch(deleteCourse(course._id));
                      }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click">
                        Delete
                      </Button>

                    </CardBody>
                  </Link>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </div >);
}