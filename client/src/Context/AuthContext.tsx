import { useState, createContext, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import serverURL from "../config";
import { getToken } from "../Utils/getToken";

//TODO decide if array should include object id or something else, then change 'any';
//TODO display error messages
interface Props {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>(undefined!);

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<string | File>("");
  const [newUser, setNewUser] = useState<User.SignUp>({
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
  const [userProfile, setUserProfile] = useState<User.User | null>(null);
  const [updatedUserProfile, setUpdatedUserProfile] = useState<User.User | null>(null);


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
      const result: User.ImageResult = await response.json();
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
        const result: User.SignupResult = await response.json();
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
        const result: User.LoginResult = await response.json();
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

  const getUserProfile = async (token: string): Promise<void> => {

      const myHeaders: Headers = new Headers();
      myHeaders.append("Authorization", `Bearer ${token}`);
    
      const requestOptions: RequestOptions = {
        method: "GET",
        headers: myHeaders,
      };

    try {
        const response :Response = await fetch(
          serverURL+"/users/profile",
          requestOptions
        );
      const result: User.GetProfileResult = await response.json();
      setUserProfile(result.user);
      setUser(true);
      
//what happens when the token expires and the authentication fails?
//implement isLoggedin on the backend side
      } catch (error) {
//TODO display a notification for the user to log in
        setUser(false);
        console.log("Client error, could not get user profile", error);
      }
  };

  const isUserLoggedIn = (): void => {
    const token = getToken();
    if (token && user && userProfile) {
      return
    } else if (!token) {
      setUser(false); 
      //display a message for the user to log in
      navigate("/login")
      console.log("user is NOT logged in");
    } else {
      getUserProfile(token);
    }
  };

  useEffect(() => {
    isUserLoggedIn();
  }, [userProfile]);

  const logOut = () => {
    localStorage.removeItem("token");
    setUser(false);
    setUserProfile(null);
    navigate("../", { replace: true });
  };

  const deleteProfile = async (): Promise<void> => {
    const token = getToken();

    const myHeaders: Headers = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    
    const requestOptions: RequestOptions = {
      method: "DELETE",
      headers: myHeaders,
    };

    try {
        const response :Response = await fetch(
          serverURL+"/users/profile",
          requestOptions
        );
      const result: User.DeleteProfileResult = await response.json();
        logOut()
      
      } catch (error) {
        console.log("Client error while deleting the profile", error);
      }
  };

  // handleUserProfileChange, updateProfile 

  const updateProfile = async (): Promise<void> => {
    const token = getToken();

    const myHeaders: Headers = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    
    let urlencoded = new URLSearchParams();
    if (updatedUserProfile !== null) {
      urlencoded.append("firstName", updatedUserProfile.firstName);
      urlencoded.append("lastName", updatedUserProfile.lastName);
      urlencoded.append("username", updatedUserProfile.username ? updatedUserProfile.username : "");
      urlencoded.append("email", updatedUserProfile.email);
      urlencoded.append("image", updatedUserProfile.image ? updatedUserProfile.image : "");
    };

    const requestOptions: RequestOptions = {
      method: "PATCH",
      headers: myHeaders,
      body: urlencoded,
    };

    try {
        const response :Response = await fetch(
          serverURL+"/users/profile",
          requestOptions
        );
      const result: User.GetProfileResult = await response.json();
      setUserProfile(result.user);
      
      } catch (error) {
        console.log("Client error while updating the profile", error);
      }
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
        getUserProfile, 
        logOut,
        userProfile,
        setUserProfile,
        deleteProfile,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};