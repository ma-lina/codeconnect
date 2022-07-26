import { useState, createContext, ReactNode } from "react";

interface AuthContextType {
  newUser: SignUp;
  selectedFile: Blob | string;
  submitImage: (e: React.MouseEvent<HTMLFormElement>) => void;
  signUp: () => void;
  setSelectedFile: (selectedFile: Blob | string) => void;
  setNewUser: (newUser: SignUp) => void;
}

// const authContextDefaultValues: AuthContextType = {
//   signUp: () => {},
//   setSelectedFile: () => {},
//   setNewUser: () => {},
// };

interface Props {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>(undefined!);

export const AuthContextProvider: React.FC<Props> = ({ children }) => {
  const [selectedFile, setSelectedFile] = useState<string | Blob>("");
  const [newUser, setNewUser] = useState<SignUp>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email: "",
    image: "",
    isAdmin: false,
  });

  const submitImage = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedFile);
    console.log("formData", formData);

    const requestOptions = {
      method: "POST",
      body: formData,
    };
    try {
      const response = await fetch(
        "http://localhost:5000/profile/photoUpload",
        requestOptions
      );
      const result = await response.json();
      setNewUser({ ...newUser, image: result.imageUrL });
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
      urlencoded.append("username", newUser.username);
      urlencoded.append("email", newUser.email);
      urlencoded.append("password", newUser.password);
      urlencoded.append("image", newUser.image ? newUser.image : "");
      var requestOptions = {
        method: "POST",
        body: urlencoded,
      };

      try {
        const response = await fetch("http://localhost:5000/", requestOptions);
        const result = await response.json();
        console.log("results", result);
      } catch (error) {
        console.log("error fetching", error);
      }
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
