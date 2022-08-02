import { Schema } from "mongoose";
import * as mongoose from "mongoose";

const options = {
  discriminatorKey: "kind",
  timestamps: true,
};

const baseSchema = new mongoose.Schema(
  {
    author: String,
    field: Array,
    location: String,
    description: String,
    date: Date,
    starred: Array,
  },
  options
);

let baseModel = mongoose.model("Base", baseSchema);

//TODO better naming for schema and discriminators?

const mentoringSchema = baseModel.discriminator(
  "Mentoring",
  new mongoose.Schema(
    {
      techKnowHow: Array,
      level: String,
      availability: Array,
      timeslots: Array,
      request: Boolean,
    },
    options
  )
);

const shadowingSchema = baseModel.discriminator(
  "Shadowing",
  new mongoose.Schema(
    {
      techKnowHow: Array,
      level: String,
      availability: Array,
      timeslots: Array,
      length: Number,
      request: Boolean,
    },
    options
  )
);

const coworkingSchema = baseModel.discriminator(
  "Coworking",
  new mongoose.Schema(
    {
      time: Number,
      frequency: Array,
    },
    options
  )
);

let mentoringModel = mongoose.model("Mentee", mentoringSchema);
let shadowingModel = mongoose.model("Shadowing", shadowingSchema);
let coworkingModel = mongoose.model("Coworking", coworkingSchema);

export { mentoringModel, shadowingModel, coworkingModel };
