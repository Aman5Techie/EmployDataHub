/* eslint-disable prettier/prettier */
const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    employeeId: {
      type: String,
      required: [true, "Must have an employee ID"],
      unique: true
    },
    firstName: {
      type: String,
      required: [true, "Must have a first name"],
      trim: true
    },
    lastName: {
      type: String,
      required: [true, "Must have a last name"],
      trim: true
    },
    email: {
      type: String,
      required: [true, "Must have an email address"],
      unique: true,
      lowercase: true,
      trim: true,
      match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    phoneNumber: {
      type: String,
      required: [true, "Must have a phone number"],
      trim: true
    },
    department: {
      type: String,
      required: [true, "Must have a department"],
      trim: true
    },
    position: {
      type: String,
      required: [true, "Must have a position"],
      trim: true
    },
    salary: {
      type: Number,
      required: [true, "Must have a salary"]
    },
    address: {
      street: {
        type: String,
        required: [true, "Must have a street"]
      },
      city: {
        type: String,
        required: [true, "Must have a city"]
      },
      state: {
        type: String,
        required: [true, "Must have a state"]
      },
      zipCode: {
        type: String,
        required: [true, "Must have a zip code"]
      }
    },
    startDate: {
      type: Date,
      required: [true, "Must have a start date"]
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: [true, "Must have a gender"]
    },
    description: {
      type: String,
      trim: true
    }
  });
// eslint-disable-next-line new-cap

const employe = new mongoose.model("employe",employeeSchema)

// const tours = new Testmodel({
//     name:"Aman",
//     salary : 46868465688,
//     staus:"Reular"
// })

module.exports = {employe}