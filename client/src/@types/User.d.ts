interface User {
  email: string;
  firstName: string;
  image?: string;
  isLoggedin?: boolean;
  isAdmin?: boolean;
  lastName: string;
  starredCoworking?: Array<any>;
  starredMentorship?: Array<any>;
  starredShadowing?: Array<any>;
  username: string;
  _id: number;
}

interface SignUp extends User {
  password: string;
}
interface LoginResult extends SignupResult {
  isAuthenticated: boolean;
}
interface SignupResult {
  accessToken: string;
  message: string;
  user: User;
}
interface ImageResult {
  image: string;
  message: string;
}

interface GetProfileResult {
  message: string;
  user: User;
}

type Token = string | null; 

interface RequestOptions {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  body?: URLSearchParams;
  headers?: Headers;
}