//we might want to create a namespace for the user

interface AuthContextType {
  newUser: User.SignUp;
  selectedFile: File | string;
  submitImage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  signUp: (e: React.FormEvent) => void;
  logIn: (e: React.FormEvent) => void;
  setSelectedFile: (selectedFile: File | string) => void;
  setNewUser: (newUser: User.SignUp) => void;
  user: boolean;
  setUser: (user: boolean) => void;
  loginUser: Login;
  setLoginUser: (loginUser: Login) => void;
  getUserProfile: (token:string) => Promise<void>;
  logOut: () => void;
  userProfile: User.User | null;
  setUserProfile: (userProfile: User.User) => void;
  isUserLoggedIn: () => boolean;
  deleteProfile: () => Promise<void>;
  updatedUserProfile: User.UpdatedUser | null;
  setUpdatedUserProfile: (updatedUserProfile: User.UpdatedUser) => void;
  updateProfile: () => Promise<void>;
}
interface RequestOptions {
  method: "GET" | "POST" | "PATCH" | "DELETE";
  body?: URLSearchParams;
  headers?: Headers;
}

declare namespace User {
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

  interface UpdatedUser {
    email?: string;
    firstName?: string;
    image?: string;
    lastName?: string;
    username?: string;
  }

  interface SignUp extends User {
    password: string;
  }

  interface SignupResult {
    accessToken: string;
    message: string;
    user: User;
  }
  interface LoginResult extends SignupResult {
    isAuthenticated: boolean;
  }

  interface ImageResult {
    image: string;
    message: string;
  }

  interface GetProfileResult {
    message: string;
    user: User;
  }

  interface DeleteProfileResult {
    message: string;
  }
}