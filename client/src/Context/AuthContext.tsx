import { useState, createContext, useEffect, ReactNode } from "react";
import { getToken } from "../utils/getToken";

interface AuthContextType {
  newUser: SignUp;
  selectedFile: File | string;
  submitImage: (e: React.MouseEvent<HTMLButtonElement>) => void;
  signUp: () => void;
  logIn: () => void;
  setSelectedFile: (selectedFile: File | string) => void;
  setNewUser: (newUser: SignUp) => void;
  user: Boolean;
  loginUser: Login;
  setLoginUser: (loginUser: Login) => void;
}
interface Props {
  children: ReactNode;
}

//TODO display error messages

export const AuthContext = createContext<AuthContextType>(undefined!);

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | File>("");
  const [newUser, setNewUser] = useState<SignUp>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    image: "",
    //  isLoggedin: false,
    isAdmin: false,
  });
  const [loginUser, setLoginUser] = useState<Login>({
    email: "",
    password: "",
    token: "",
  });

  const submitImage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    console.log("selectedFile", selectedFile);
    console.log("formData", formData);

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/users/profile/photoUpload",
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      setNewUser({ ...newUser, image: result.image });
      console.log("image uploaded", newUser);
    } catch (error) {
      console.log('"error submiting picture"', error);
    }
  };

  const signUp = async () => {
    let urlencoded = new URLSearchParams();
    if (newUser !== null) {
      urlencoded.append("firstName", newUser.firstName);
      urlencoded.append("lastName", newUser.lastName);
      urlencoded.append("username", newUser.username ? newUser.username : "");
      urlencoded.append("email", newUser.email);
      urlencoded.append("password", newUser.password);
      urlencoded.append("image", newUser.image ? newUser.image : "");
      var requestOptions = {
        method: "POST",
        body: urlencoded,
      };

      try {
        const response = await fetch(
          "http://localhost:5000/users/register",
          requestOptions
        );
        const result = await response.json();
        console.log("results", result);
      } catch (error) {
        console.log("error fetching", error);
      }
    }
  };

  const logIn = async () => {
    let urlencoded = new URLSearchParams();
    if (loginUser !== null) {
      urlencoded.append("email", loginUser.email);
      urlencoded.append("password", loginUser.password);
      console.log(loginUser);
      var requestOptions = {
        method: "POST",
        body: urlencoded,
      };
      try {
        const response = await fetch(
          "http://localhost:5000/users/login",
          requestOptions
        );
        const result = await response.json();
        const { token, user } = result;
        if (token) {
          localStorage.setItem("token", token);
        } else {
          console.log("error seting token");
        }
        console.log("result", result);
      } catch (error) {
        console.log("login error", error);
      }
    }
  };

  const isUserLoggedIn = () => {
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
        loginUser,
        setLoginUser,
        logIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
