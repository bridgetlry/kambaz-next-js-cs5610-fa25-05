import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
    name: "enrollments",
    initialState,
    reducers: {
        addEnrollment: (state, { payload: enrollment }) => {
            console.log("Adding enrollment:", enrollment);
            const newEnrollment = { ...enrollment, _id: uuidv4() };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
        },
        deleteEnrollment: (state, { payload: enrollmentId }) => {
            console.log("Deleting enrollment with ID:", enrollmentId);
            state.enrollments = state.enrollments.filter(
                (enrollment: any) => enrollment._id !== enrollmentId
            );
        },
    },
})

export const { addEnrollment, deleteEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;