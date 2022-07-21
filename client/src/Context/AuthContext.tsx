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

  return (
    <AuthContext.Provider
      value={{
        selectedFile,
        setSelectedFile,
        newUser,
        setNewUser,
        submitImage,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
