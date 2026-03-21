const express = require("express");
const app = express();

const studentRoutes = require("./routes/studentRoutes");

app.use(express.json());

// routes
app.use("/students", studentRoutes);

// server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});