const express = require("express");
const router = express.Router();

const {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent
} = require("../controllers/studentController");

const validateStudent = require("../middleware/validateStudent");

// APIs
router.post("/", validateStudent, createStudent);
router.get("/", getAllStudents);
router.get("/:id", getStudentById);
router.put("/:id", validateStudent, updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;