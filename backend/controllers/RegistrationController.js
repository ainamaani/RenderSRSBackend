const Registration = require("../models/Registration");

const registerStudent = async(req, res) =>{
    try {
        const { studentName, studentNumber, course } = req.body;
        const studentDetails = await Registration.create({ 
            studentName, studentNumber, course
         })
        if(studentDetails){
            res.status(200).json(studentDetails);
        }else{
            res.status(400).json({ error: "Failed to add the student" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const fetchStudents = async(req, res) =>{
    try {
        const students = await Registration.find({});
        if(students){
            res.status(200).json(students);
        } else{
            res.status(400).json({ error: "Failed to fetch students" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    registerStudent, fetchStudents
}