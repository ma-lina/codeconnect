interface userProfile {
  _id: ObjectId;
  username?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  image?: string;
  loggedIn: boolean;
  isAdmin: boolean;
}
