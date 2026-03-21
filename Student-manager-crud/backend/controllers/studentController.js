let students = require("../models/studentModel");

// CREATE
exports.createStudent = (req, res) => {
  const { name, email, age } = req.body;

  const newStudent = {
    id: Date.now().toString(),
    name,
    email,
    age
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student created successfully",
    data: newStudent
  });
};

// GET ALL
exports.getAllStudents = (req, res) => {
  res.json(students);
};

// GET BY ID
exports.getStudentById = (req, res) => {
  const student = students.find(s => s.id === req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
};

// UPDATE
exports.updateStudent = (req, res) => {
  const student = students.find(s => s.id === req.params.id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  const { name, email, age } = req.body;

  student.name = name || student.name;
  student.email = email || student.email;
  student.age = age || student.age;

  res.json({
    message: "Student updated",
    data: student
  });
};

// DELETE
exports.deleteStudent = (req, res) => {
  const index = students.findIndex(s => s.id === req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  students.splice(index, 1);

  res.json({ message: "Student deleted" });
};
