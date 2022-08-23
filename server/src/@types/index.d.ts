//TODO split up in different files?

type mArray = import("mongoose").Types.Array<any>;
type mDocumentArray = import("mongoose").Types.DocumentArray<any>;
type mObjectId = import("mongoose").Types.ObjectId;
interface ResponseJson {
  message: string;
  user?: object;
  isAuthenticated?: boolean;
  accessToken?: string;
  image?: string;
  error?: any;
}
/*
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
  creator: mObjectId;
  field: mArray;
  location: string;
  description: string;
  date: Date;
  starred: mDocumentArray<UserData>;
}

//interface BaseDoc extends Base, Document {}
/* 
interface Mentoring {
  techKnowHow: Types.Array<string>;
  level: string;
  availability: Types.Array<string>;
  timeslots: Types.Array<string>;
  offer: boolean;
}

interface MentoringDoc extends Mentoring, Document {}

interface Shadowing {}

interface Coworking {}
 */
