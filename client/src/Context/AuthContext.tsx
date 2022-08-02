import { useState, createContext, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "../Utils/getToken";

interface AuthContextType {
  newUser: SignUp;
  selectedFile: File | string;
  submitImage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  signUp: (e: React.FormEvent) => void;
  logIn: (e: React.FormEvent) => void;
  setSelectedFile: (selectedFile: File | string) => void;
  setNewUser: (newUser: SignUp) => void;
  user: boolean;
  setUser: (user: boolean) => void;
  loginUser: Login;
  setLoginUser: (loginUser: Login) => void;
  logOut: () => void;
  userProfile: User;
  setUserProfile: (userProfile: User) => void;
}
interface Props {
  children: ReactNode;
}

//TODO decide if array should include object id or something else, then change 'any';
//TODO display error messages

export const AuthContext = createContext<AuthContextType>(undefined!);

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<string | File>("");
  const [userProfile, setUserProfile] = useState<User>({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    image: "",
    isAdmin: false,
    isLoggedin: false,
    _id: 0,
  })
  const [newUser, setNewUser] = useState<SignUp>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    image: "",
    isAdmin: false,
    isLoggedin: false,
    _id: 0,
  });
  const [loginUser, setLoginUser] = useState<Login>({
    email: "",
    password: "",
    token: "",
  });

  let navigate = useNavigate();

  const submitImage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    const requestOptions = {
      method: "POST",
      body: formData,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/users/profile/photoUpload",
        requestOptions
      );
      const result: ImageResult = await response.json();
      setNewUser({ ...newUser, image: result.image });
      console.log("image uploaded", newUser);
    } catch (error) {
      console.log("error submiting picture", error);
    }
  };

  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();

    let urlencoded = new URLSearchParams();
    if (newUser !== null) {
      urlencoded.append("firstName", newUser.firstName);
      urlencoded.append("lastName", newUser.lastName);
      urlencoded.append("username", newUser.username ? newUser.username : "");
      urlencoded.append("email", newUser.email);
      urlencoded.append("password", newUser.password);
      urlencoded.append("image", newUser.image ? newUser.image : "");
      const requestOptions = {
        method: "POST",
        body: urlencoded,
      };

      try {
        const response = await fetch(
          "http://localhost:5000/users/register",
          requestOptions
        );
        const result: SignupResult = await response.json();
        console.log("results", result);
        const token = result.accessToken;
        if (token) {
          localStorage.setItem("token", token);
          setUserProfile(result.user);
          setUser(true);
          navigate("/profile");
//TODO error messages with timeout
        } else {
          console.log("error seting token");
        }
      } catch (error) {
        console.log("error fetching", error);
      }
    }
  };

  const logIn = async (e: React.FormEvent) => {
    e.preventDefault();

    let urlencoded = new URLSearchParams();
    if (loginUser !== null) {
      urlencoded.append("email", loginUser.email);
      urlencoded.append("password", loginUser.password);
      const requestOptions = {
        method: "POST",
        body: urlencoded,
      };
      try {
        const response = await fetch(
          "http://localhost:5000/users/login",
          requestOptions
        );
        const result: LoginResult = await response.json();
        const token = result.accessToken;
        if (token) {
          localStorage.setItem("token", token);
          setUserProfile(result.user);
          setUser(true);
          navigate("/profile");
//TODO error messages with timeout
        } else {
          console.log("error seting token");
        }
      } catch (error) {
        console.log("login error", error);
      }
    }
  };


  const isUserLoggedIn = (): void => {
    const token = getToken();
    console.log(token);
    if (token) {
      setUser(true);
      console.log("user is logged in");
    } else {
      setUser(false);
      console.log("user is NOT logged in");
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, [user]);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(false);
    navigate("../", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        selectedFile,
        setSelectedFile,
        newUser,
        setNewUser,
        signUp,
        submitImage,
        user,
        setUser,
        loginUser,
        setLoginUser,
        logIn,
        logOut,
        userProfile,
        setUserProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};