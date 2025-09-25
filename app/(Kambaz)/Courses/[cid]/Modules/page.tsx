import { ListGroup, ListGroupItem } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
    return (
        <div>
            <div>
                <ModulesControls /><br /><br /><br /><br />
                <ListGroup className="rounded-0" id="wd-modules">
                    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary"> Week 1 <ModuleControlButtons /></div>
                        <ListGroup className="wd-lessons rounded-0">
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                LEARNING OBJECTIVES <LessonControlButtons /> </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                Introduction to the course <LessonControlButtons /> </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                Learn what is Web Development <LessonControlButtons /></ListGroupItem>
                        </ListGroup>
                    </ListGroupItem>
                    <ListGroupItem className="wd-module p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 <ModuleControlButtons /> </div>
                        <ListGroup className="wd-lessons rounded-0">
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                LESSON 1 <LessonControlButtons /> </ListGroupItem>
                            <ListGroupItem className="wd-lesson p-3 ps-1">
                                LESSON 2 <LessonControlButtons /> </ListGroupItem>
                        </ListGroup>
                    </ListGroupItem>
                </ListGroup>
            </div>

        </div>
    );
}