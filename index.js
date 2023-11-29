require("dotenv").config();
const PORT = process.env.PORT || 5000;

const express = require("express");

const app = express();
const usersRoute = require("./routes/users.js");
const middlewareLogRequest = require("./middleware/logs.js");

app.use(middlewareLogRequest);
app.use(express.json());
app.use("/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Server berhasil di runing di port http://localhost:${PORT}`);
});
