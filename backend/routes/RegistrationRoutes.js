const express = require("express");
const router = express.Router();
const { fetchStudents, registerStudent } = require("../controllers/RegistrationController")

router.post("/register", registerStudent);

router.get("/students", fetchStudents);

module.exports = router



