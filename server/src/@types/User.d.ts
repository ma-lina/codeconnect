//TODO do we need _id, timestamps passed in user data to FE?
//TODO rewrite this and simplify, only need 1 or 2?
// import { Document, Model } from "mongoose"
//notes about the user document from mongoose
// ] req.user {
// [1]   _id: new ObjectId("62e00170692c2ecbe966ce17"),
// [1]   firstName: 'George',
// [1]   lastName: 'G',
// [1]   password: '$2b$10$yw8GhhRCKFwifzFCliRh3OPJKqO19xmHio1vz8NoLuRYtUoiH1KvC',
// [1]   email: 'george@e.com',
// [1]   isLoggedin: true,
// [1]   username: 'GeorgeG',
// [1]   starredMentorship: [],
// [1]   starredCoworking: [],
// [1]   starredShadowing: [],
// [1]   createdAt: 2022-07-26T15:00:00.177Z,
// [1]   updatedAt: 2022-07-27T09:15:10.617Z,
// [1]   __v: 0

declare namespace UserN {
  interface UserLoginData {
    password: string;
    email: string;
  }

  interface UserRegistrationData extends UserLoginData {
    firstName: string;
    lastName: string;
    isLoggedin: boolean;
    username?: string;
    image?: string;
  }
  interface UserData extends UserLoginData, UserRegistrationData {
    //_id might be an object, needs converting to a string? When?
    _id: string;
    isAdmin?: boolean;
    starredMentorship?: Array<string>;
    starredCoworking?: Array<string>;
    starredShadowing?: Array<string>;
  }

  interface UserProfileData {
    _id: string;
    firstName: string;
    lastName: string;
    isLoggedin: boolean;
    username?: string;
    image?: string;
    isAdmin?: boolean;
    starredMentorship?: Array<string>;
    starredCoworking?: Array<string>;
    starredShadowing?: Array<string>;
  }

  interface MongooseUserData extends UserProfileData, UserLoginData {
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  }
  interface UpdatedUser {
    email?: string;
    firstName?: string;
    image?: string;
    lastName?: string;
    username?: string;
  }
}
