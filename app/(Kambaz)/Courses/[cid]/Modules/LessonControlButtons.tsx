import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus, BsYoutube } from "react-icons/bs";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { deleteAssignment, updateAssignment } from "../Assignments/reducer";
import { useParams } from "next/navigation";
import Link from "next/link";
export default function LessonControlButtons(
  { lesson, moduleId }: { lesson: any, moduleId: any }) {
  const { cid } = useParams();
  return (
    <div className="float-end">
      <Link href={
        `/Courses/${cid}/YouTube/Search?search=${lesson.name}&mid=${moduleId}&lid=${lesson._id}`}
        className="decoration-none text-danger me-2">
        <BsYoutube className="fs-4" />
      </Link>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}