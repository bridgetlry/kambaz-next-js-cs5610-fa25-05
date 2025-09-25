import Link from "next/link";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments() {
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
                <ListGroupItem className="wd-all-assigned-work p-0 mb-4 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">ASSIGNMENTS 40% of Total <ModuleControlButtons /></div>
                    <ListGroup className="wd-at rounded-0" id="wd-assignment-list">
                        <ListGroupItem className="wd-assignment-list-item wd-lesson">
                            <Link href="/Courses/1234/Assignments/123" className="wd-assignment-link">
                                A1 - ENV + HTML <LessonControlButtons />
                            </Link>
                            <br />
                            Multiple Modules |
                            <b> Not available until </b> May 6 at 12:00am |
                            <b> Due </b> May 13 at 11:59pm | 100 pts
                    
                        </ListGroupItem>
                        <ListGroupItem className="wd-assignment-list-item wd-lesson">
                            <Link href="/Courses/1234/Assignments/456" className="wd-assignment-link">
                                A2 - CSS + BOOTSTRAP <LessonControlButtons />
                            </Link>
                            <br />
                            Multiple Modules |
                            <b> Not available until </b> May 13 at 12:00am |
                            <b> Due </b> May 20 at 11:59pm | 100 pts
                        </ListGroupItem>
                        <ListGroupItem className="wd-assignment-list-item wd-lesson">
                            <Link href="/Courses/1234/Assignments/789" className="wd-assignment-link">
                                A3 - JAVASCRIPT + REACT <LessonControlButtons />
                            </Link>
                            <br />
                            Multiple Modules |
                            <b> Not available until </b> May 20 at 12:00am |
                            <b> Due </b> May 27 at 11:59pm | 100 pts
                        </ListGroupItem>
                    </ListGroup>
                </ListGroupItem>

                <ListGroupItem className="wd-module p-0 mb-4 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">QUIZZES 10% of Total <ModuleControlButtons /></div>
                    <ListGroup className="wd-lessons rounded-0">
                        {/* placeholder for quiz items */}
                    </ListGroup>
                </ListGroupItem>

                <ListGroupItem className="wd-module p-0 mb-4 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">EXAMS 20% of Total <ModuleControlButtons /></div>
                    <ListGroup className="wd-lessons rounded-0">
                        {/* placeholder for exam items */}
                    </ListGroup>
                </ListGroupItem>

                <ListGroupItem className="wd-module p-0 mb-4 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">PROJECT 30% of Total <ModuleControlButtons /></div>
                    <ListGroup className="wd-lessons rounded-0">
                        {/* placeholder for project items */}
                    </ListGroup>
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}
