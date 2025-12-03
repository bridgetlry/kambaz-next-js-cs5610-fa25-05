import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { FaPencil, FaTrash } from "react-icons/fa6";
import { deleteAssignment, updateAssignment } from "../Assignments/reducer";
export default function AssignmentControlButtons(
  {assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: () => void }
) {
  return (
    <div className="float-end">
      <FaPencil onClick={() => updateAssignment(assignmentId)} className="text-primary me-3" />
      <FaTrash className="text-danger me-2 mb-1" onClick={(event) => {
        event.preventDefault();
        deleteAssignment();}}/>
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
);
}