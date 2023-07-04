const {app} = require("./app")
const dotenv = require('dotenv')
const mongoose = require('mongoose')


dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE.replace("<password>",process.env.PASSWORD)
mongoose.connect(DB,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:true,
  useUnifiedTopology: true 
}).then(()=>{
  console.log("Connection Succesfull");

}).catch((err)=>{
  console.log(err);
})






const port = 2000;
app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
  