require("dotenv").config();   // Must be FIRST

const express = require("express");
const cors = require("cors");
const { QuestionRouter } = require("./Routes/question.routes");
const { connection } = require("./db");

const app = express();
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working");
});

// Questions route
app.use("/questions", QuestionRouter);

// Define fixed port explicitly
const PORT = 8080;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to the database");
    console.log(`Server is Running on port ${PORT}`);
  } catch (error) {
    console.log(error);
  }
});
