import mongoose from "mongoose";

const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    staff_id: {
        type: String,
        required: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },

    qualification: {
        type: String,
        required: true
    },

    salary: {
        type: Number,
        required:true
    }


});


const Teacher = mongoose.model('teacher', teacherSchema)

export default Teacher
