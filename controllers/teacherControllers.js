import Teacher from "../models/teacherSchema.js"
import mongoose from 'mongoose'




export const getTeachers = async (req, res) => {
    try {
        const teachers = await Teacher.find()

        res.status(200).json({ teachers })
    } catch (error) {
        res.status(404).json({ "Error": error})
    }
}
 

export const createTeacher = async (req, res) => {
    const {name, age, staff_id, department, qualification, salary} = req.body
    try{
        if(!name || !age || !department || !staff_id || !qualification || !salary){
            return res.status(400).json({error: "All fields required"})
        }
        const teacher = await Teacher.create(req.body)

        res.status(201).json({teacher})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

export const getSingleTeacher = async (req, res) => {
    const {_id} = req.params

    try{
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(400).json({error: "invalid teacher"})
        }

        const teacher = await Teacher.findById(_id)
        if (!teacher){
            return res.status(404).json({error: "teacher not found"})
        }
    }catch(error){
        res.status(400).json({error:  "error"})
    }
}

export const editTeacher = async (req, res) => {
    const {_id} = req.params
    try {
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(400).json({error: "Invalid teacher id"})
        }
        const teacher = await Teacher.findByIdAndUpdate(_id, req.body, {new: true})
        if(!teacher){
            return res.status(404).json({error: "teacher not found"})
        }
        res.status(200).json({teacher})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

export const removeTeacher = async (req, res) => {
    const {_id} = req.params
    try{
        if(!mongoose.Types.ObjectId.isValid(_id)){
            return res.status(400).json({error: "Invalid teacher id"})
        }
        const teacher = await Teacher.findByIdAndDelete(_id)
        if(!teacher){
            return res.status(404).json({error: "student not found"})
        }
        res.status(200).json({message: "Successfully deleted"})
    }catch(error){
        res.status(400).json({error: error.message})
    }
}