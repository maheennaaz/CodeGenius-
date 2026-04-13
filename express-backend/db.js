const mongoose = require("mongoose");
require("dotenv").config();

console.log("Loaded Mongo URL:", process.env.url);  // <-- add this line

const connection = mongoose.connect(process.env.url);

module.exports = { connection };

