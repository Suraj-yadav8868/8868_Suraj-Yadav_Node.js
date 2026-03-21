module.exports = (req, res, next) => {
  const { name, email, age } = req.body;

  // Empty check
  if (!name || !email || !age) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Name validation
  if (name.length < 3) {
    return res.status(400).json({ message: "Name must be at least 3 characters" });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  // Age validation
  if (age < 18 || age > 60) {
    return res.status(400).json({ message: "Age must be between 18 and 60" });
  }

  next();
};
