require("dotenv").config();
const express = require("express");
const app = express();
const usersRoute = require("./routes/users.js");
const middlewareLogRequest = require("./middleware/logs.js");
const upload = require("./middleware/multer.js");

// Middleware
app.use(middlewareLogRequest);
app.use(express.json());
app.use('/assets', express.static('public/images'));

// Routes
app.use("/users", usersRoute);

// File Upload Route
app.post("/upload", upload.single('photo'), (req, res, next) => {
  res.json({
    message: "Upload Sukses"
  });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
