import { useEffect, useState, createContext } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [selectedFile, setSelectedFile] = useState<null | string>(null);
  const [newUser, setNewUser] = useState<SignUp>({});

  const submitImage = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
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

  const signUp = async (): Promise<void> => {
    let urlencoded = new URLSearchParams();
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
  };

  return (
    <AuthContext.Provider
      value={{
        selectedFile,
        setSelectedFile,
        newUser,
        setNewUser,
        submitImage,
        signUp,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
