import {
  model,
  Schema,
  Types,
  Document,
  Model,
  InferSchemaType,
} from "mongoose";

interface UserData {
  firstName: string;
  lastName: string;
  isLoggedin: boolean;
  username?: string;
  image?: string;
  _id: string;
  isAdmin?: boolean;
  starredMentorship?: any;
  starredCoworking?: any;
  starredShadowing?: any;
}
interface Base {
  author: string;
  field: Types.Array<string>;
  location: string;
  description: string;
  date: Date;
  starred: Types.DocumentArray<UserData>;
}

interface BaseDoc extends Base, Document {}

const options = {
  discriminatorKey: "kind",
  collection: "pinboard",
  timestamps: true,
};

const baseSchemaFields: Record<keyof Base, any> = {
  author: [{ firstName: String, lastName: String }],
  field: Array,
  location: String,
  description: String,
  date: Date,
  starred: Array,
};

const baseSchema = new Schema(baseSchemaFields, options);

//Other approach to define types, but no check if required in schema by mongoose
/* const baseSchema = new Schema({
  author: String,
  field: Array,
  location: String,
  description: String,
  date: Date,
  starred: Array,
});
type Base = InferSchemaType<typeof baseSchema>; */

let baseModel = model<BaseDoc>("Base", baseSchema);

interface Mentoring {
  techKnowHow: Types.Array<string>;
  level: string;
  availability: Types.Array<string>;
  timeslots: Types.Array<string>;
  offer: boolean;
}

interface MentoringDoc extends Mentoring, Document {}

const mentoringFields: Record<keyof Mentoring, any> = {
  techKnowHow: Array,
  level: String,
  availability: Array,
  timeslots: Array,
  offer: Boolean,
};

const mentoringModel = baseModel.discriminator(
  "Mentoring",
  new Schema(mentoringFields, options)
);

interface Shadowing {}

const shadowingModel = baseModel.discriminator(
  "Shadowing",
  new Schema(
    {
      techKnowHow: Array,
      level: String,
      availability: Array,
      timeslots: Array,
      length: Number,
      offer: Boolean,
    },
    options
  )
);

interface Coworking {}

const coworkingModel = baseModel.discriminator(
  "Coworking",
  new Schema(
    {
      time: Number,
      frequency: Array,
    },
    options
  )
);

export { mentoringModel, shadowingModel, coworkingModel };
