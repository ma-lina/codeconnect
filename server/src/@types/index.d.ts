//TODO import mongoose Types without turning file into local
//TODO split up in different files
interface ResponseJson {
  message: string;
  user?: object;
  isAuthenticated?: boolean;
  accessToken?: string;
  image?: string;
  error?: any;
}

/* interface UserData {
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
  //Types: import("mongoose").Types;
  author: string;
  field: Types.Array<string>;
  location: string;
  description: string;
  date: Date;
  starred: Types.DocumentArray<UserData>;
}

interface BaseDoc extends Base, Document {}

interface Mentoring {
  techKnowHow: Types.Array<string>;
  level: string;
  availability: Types.Array<string>;
  timeslots: Types.Array<string>;
  offer: boolean;
}

interface MentoringDoc extends Mentoring, Document {}

interface Shadowing {}

interface Coworking {} */
