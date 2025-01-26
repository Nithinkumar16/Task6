
const mongoose = require("mongoose");

// Employee Schema
const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Employee Model
const employeeModel = mongoose.model("employees", employeeSchema);

module.exports = employeeModel;
