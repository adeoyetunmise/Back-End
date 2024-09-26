import {Router} from "express";
import { createTeacher, getTeachers, getSingleTeacher, editTeacher, removeTeacher } from "../controllers/teacherControllers.js";

const teacherRouter = Router()

teacherRouter.get('/', getTeachers)
teacherRouter.post('/', createTeacher)
// teacherRouter.get('/:_id', getSingleTeacher)
teacherRouter.patch('/:_id', editTeacher)
teacherRouter.delete('/:_id', removeTeacher)

export default teacherRouter