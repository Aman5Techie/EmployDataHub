const express = require("express");
const app = express();
const path = require("path");
const { replacetemp } = require("./change_function");
const { employe } = require("./mongo_model.js");
const { detail, postemploy, main, employee } = require("./templates");
const { log } = require("util");
const validateEmployeeData = require("./validator")
app.use(express.json())

app.get("/employee", async (req, res) => {
  // res.writeHead(200, { 'content-type': 'text/html' });
  res.writeHead(200, { "Content-Type": "text/html" });
    const dataobj = await employe.find();
    const cards = dataobj.map((el, index) => replacetemp(employee, el, index + 1)).join(""); // mapping every object and make a card of it and then add it to the overview
    const mainpage = main.replace(/{%Cardcontainer%}/g, cards);
    res.end(mainpage);
  // res.sendFile(mainpage)

});

app.get("/employe", async (req, res) => {
  const content = await employe.findById(req.query.id);

  const update_detail = replacetemp(detail, content);
  res.writeHead(200, { "content-type": "text/html" });
  res.end(update_detail);
});


app.post("/add",validateEmployeeData,async (req,res)=>{
    const data = req.employeeData;
    console.log(req.body);
    // const user = await employe.create(data)
    // console.log(user);
    // res.json({user})
})

app.get('/add',async(req,res)=>{
    res.sendFile(path.join(__dirname+"/Template/postemploy.html"))
})



module.exports = { app };
