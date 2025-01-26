const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const employeeModel = require("./models/employee");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/employee");

app.post("/login",(req,res) => {
const {email,password}=req.body;
employeeModel.findone({email:email})
.then(user =>{
  if(user){
if(user.password===password){
  res.json("success")
}else{
  res.json("password is incorrect ")
}
}else{
  res.json("no record found")
}
})
})
// Register Route
app.post("/register", async (req, res) => {
   employeeModel.create(req.body)
    .then(employee =>res,json(employee))
    .catch(err => res.json(err))
  })

app.listen(3001,() =>{
  console.log("server is running")
})
