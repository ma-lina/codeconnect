import { model, Schema, Types, Document, InferSchemaType } from "mongoose";

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
  creator: number;
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
  creator: { type: Schema.Types.ObjectId, ref: "User" },
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

interface Shadowing {
  techKnowHow: Types.Array<string>;
  level: string;
  availability: Types.Array<string>;
  timeslots: Types.Array<string>;
  length: number;
  offer: boolean;
}

const shadowingFields: Record<keyof Shadowing, any> = {
  techKnowHow: Array,
  level: String,
  availability: Array,
  timeslots: Array,
  length: Number,
  offer: Boolean,
};

const shadowingModel = baseModel.discriminator(
  "Shadowing",
  new Schema(shadowingFields, options)
);

interface Coworking {
  time: number;
  frequency: Types.Array<string>;
}

const coworkingFields: Record<keyof Coworking, any> = {
  time: Number,
  frequency: Array,
};

const coworkingModel = baseModel.discriminator(
  "Coworking",
  new Schema(coworkingFields, options)
);

export { mentoringModel, shadowingModel, coworkingModel };
