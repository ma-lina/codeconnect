import { Schema } from "mongoose";
import * as mongoose from "mongoose";
import { StringDecoder } from "string_decoder";

const userSchema: Schema = new mongoose.Schema({
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
  level: String,
  description: String,
  startDate: Date,
});

let mentoringModel = mongoose.model("Mentoring", userSchema);

export { mentoringModel };
