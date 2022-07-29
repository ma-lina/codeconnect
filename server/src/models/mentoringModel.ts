import { Schema } from "mongoose";
import * as mongoose from "mongoose";

const options = {
  discriminatorKey: "",
  collection: "",
};

/* const menteeSchema: Schema = new mongoose.Schema(
  {
    field: {
      type: Array,
      //required: true
    },
    techKnowHow: {
      type: Array,
      //required: true
    },
    location: String,
    yearsExp: Number,
    availability: Array,
    timeslots: Array,
    description: String,
    startDate: Date,
  },
  { timestamps: true }
); */

const baseSchema: Schema = new mongoose.Schema(
  {
    field: Array,
    techKnowHow: Array,
    location: String,
    yearsExp: Number,
    availability: Array,
    timeslots: Array,
    description: String,
  },
  options
);

let baseModel = mongoose.model("Base", baseSchema);

const menteeSchema: Schema = baseModel.discriminator(
  "Mentee",
  new mongoose.Schema({}, options)
);

const mentorSchema: Schema = baseModel.discriminator(
  "Mentor",
  new mongoose.Schema({}, options)
);

let menteeModel = mongoose.model("Mentee", menteeSchema);
let mentorModel = mongoose.model("Mentor", mentorSchema);

export { menteeModel, mentorModel };
