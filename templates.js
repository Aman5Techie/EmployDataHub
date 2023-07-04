const fs = require("fs")
const main = fs.readFileSync("Template/main.html", "utf-8")
const employee = fs.readFileSync("Template/employee.html", "utf-8")
const detail = fs.readFileSync("Template/detail.html", "utf-8")
const postemploy = fs.readFileSync("Template/postemploy.html", "utf-8")


module.exports = {detail,postemploy,main,employee}