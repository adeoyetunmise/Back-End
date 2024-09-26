import {Router} from "express";
import { createStudent, getStudents, getSingleStudent, editStudent, removeStudent } from "../controllers/studentControllers.js";

const studentRouter = Router()

studentRouter.get('/ ', getStudents)
studentRouter.post('/', createStudent)
studentRouter.get('/:_id', getSingleStudent)
studentRouter.patch('/:_id', editStudent)
studentRouter.delete('/:_id', removeStudent)

export default studentRouter
