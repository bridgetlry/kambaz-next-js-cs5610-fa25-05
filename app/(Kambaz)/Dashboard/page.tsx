"use client"
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewCourse, deleteCourse, updateCourse, setCourses } from "../Courses/reducer";
import Link from "next/link";
import { Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button, FormControl } from "react-bootstrap";
import * as client from "../Courses/client";
import { setEnrollments } from "../Dashboard/reducer";

export default function Dashboard() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { courses } = useSelector((state: any) => state.coursesReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [course, setCourse] = useState<any>({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
  const fetchCourses = async () => {
    try {
      const courses = await client.fetchAllCourses();
      dispatch(setCourses(courses));
    } catch (error) {
      console.error(error);
    }
  };
  const onAddNewCourse = async () => {
    const response = await client.createCourse(course);
    console.log("Full response:", response);
    console.log("response.course:", response.course);
    console.log("response.enrollment:", response.enrollment);

    // Extract both course and enrollment
    const newCourse = response.course;
    const newEnrollment = response.enrollment;

    console.log("newCourse:", newCourse);
    console.log("newEnrollment:", newEnrollment);

    dispatch(setCourses([...courses, newCourse]));
    dispatch(setEnrollments([...enrollments, newEnrollment]));
  };

  const onDeleteCourse = async (courseId: string) => {
    const status = await client.deleteCourse(courseId);
    dispatch(setCourses(courses.filter((course: { _id: string; }) =>
      course._id !== courseId)));
  };
  const onUpdateCourse = async () => {
    await client.updateCourse(course);
    dispatch(setCourses(courses.map((c: { _id: any; }) => {
      if (c._id === course._id) { return course; }
      else { return c; }
    })));
  };

  const [showEnrollments, setShowEnrollments] = useState(true);
  function isEnrolled(courseId: string, userId: string) {
    return enrollments.some((enrollment: { user: string; course: string; }) =>
      enrollment.user === userId &&
      enrollment.course === courseId
    );
  }
  // console.log("Enrollments in state:", enrollments);

  const onEnroll = async (courseId: string) => {
    const response = await client.enrollIntoCourse(currentUser?._id, courseId);
    const enrollmentData = response?.data || response;
    dispatch(setEnrollments([...enrollments, enrollmentData]));
  }

  const onUnenroll = async (courseId: string) => {
    const status = await client.unenrollFromCourse(currentUser._id, courseId);
    dispatch(setEnrollments(enrollments.filter((enrollment: { user: string; course: string; }) =>
      !(enrollment.user === currentUser._id &&
        enrollment.course === courseId)
    )));
  }

  useEffect(() => {
    fetchCourses();
    client.fetchEnrollments(currentUser?._id).then((data) => {
      dispatch(setEnrollments(data));
    });
  }, [currentUser]);

  return (
    <div id="wd-dashboard">
      <button className="btn btn-primary float-end"
        id="wd-enrollments-click"
        onClick={() => setShowEnrollments(!showEnrollments)}>{ showEnrollments ? "My Courses" : "All Courses"}</button>
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h5>New Course
        <button className="btn btn-primary float-end"
          id="wd-add-new-course-click"
          onClick={onAddNewCourse} > Add </button>
        <button className="btn btn-warning float-end me-2"
          onClick={onUpdateCourse} id="wd-update-course-click">Update </button>
      </h5> <br />
      <FormControl value={course.name} className="mb-2"
        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
      <FormControl value={course.description} rows={3} as="textarea"
        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
      <hr />

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {(showEnrollments ? courses : courses
            .filter((course: { _id: string; }) =>
              isEnrolled(course._id, currentUser?._id)))
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
                            onUnenroll(course._id);
                          }
                          :
                          // Enroll
                          (event) => {
                            event.preventDefault();
                            onEnroll(course._id);
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
                        onDeleteCourse(course._id);
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