import {Router} from "express";
import { createStudent, getStudents, getSingleStudent, editStudent, removeStudent } from "../controllers/studentControllers.js";
import authentication from "../middleware/authentication.js";

const studentRouter = Router()

studentRouter.get('/', authentication, getStudents)
studentRouter.post('/', authentication, createStudent)
studentRouter.get('/:id', authentication, getSingleStudent)
studentRouter.patch('/:_id', authentication, editStudent)
studentRouter.delete('/:_id', authentication, removeStudent)

export default studentRouter
