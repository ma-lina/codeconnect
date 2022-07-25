import { Request, Response } from 'express';
import { v2 as cloudinary } from "cloudinary";
import { userModel } from '../models/userModel';
import { encryptPassword, verifyPassword } from '../utils/bcrypt';
import { issueToken } from '../utils/jwt';

//TODO define the types for the function below and for the user
//TODO define the userProfile array

//function allowing to create a new object with chosen keys from another object
//TODO specify the userObject as a typescript interface
const getNewUserObject = (userObject: object, keys: Array<string>) => {
    const newUserObject: object = {};
    keys.forEach(key => {
        newUserObject[key] = userObject[key];
        });  
    return newUserObject;
};

//TODO define the request

const register = async (req: Request, res: Response<ResponseJson>) => {
  try {
      //first check if the user already exists in mongoDB: code 400 Bad Request or proceed to create a new user
      const checkIfUserExists : UserData | null = await userModel.findOne({
      email: req.body.email,
    });

    if (checkIfUserExists) {
      res.status(400).json({
        message:
          "User with this email address already exists.",
      });
    } else {
      //user with this email does not exist yet, creating a new user object with a hashed password
      const newUserData = getNewUserObject(req.body, ["firstName", "lastName", "username", "email", "image", "isLoggedin"]);
      const hashedPassword = await encryptPassword(req.body.password);
      newUserData["password"] = hashedPassword; 
      
      //creating a mongoose model, saving it in mongoDB with a mongoose save() method, creating the user profile object
      const newUser = new userModel(newUserData); 

      try {
        const savedUser = await newUser.save();
        //the _id sent to the frontend is an object; change if FE requires a string
        const userProfile = getNewUserObject(savedUser, ["firstName", "lastName", "isLoggedin", "username", "email", "image", "_id"]);
        const userID: string = savedUser._id.toString();

        //generating a token for the user, passing the user profile and token to the response
        const token: string = issueToken(userID)

        res.status(201).json({
          message: "New user account has been created. Welcome to codeconnect",
          user: userProfile, 
          token: token,
          });
      } catch (error) {
        res
          .status(400)
          .json({
            message:
              "Server error, registration failed: cannot save a new user. Please try again.",
            error: error,
          });
        console.log("error", error, res);
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Server error, we couldn't register the user. Please try again.",
      error: error,
    });
  }
};

const login = async (req: Request, res: Response<ResponseJson>) => {
    try {
    const existingUser = await userModel.findOne({ email: req.body.email });

    if (!existingUser) {
      res.status(400).json({
        message: "User with this email does not exist, register first.",
      });
    } else {
      try {
        const isAuthenticated = await verifyPassword(
          req.body.password,
          existingUser.password
        );
        if (!isAuthenticated) {
          res.status(400).json({
            message: "Wrong password, please try again.",
            isAuthenticated: isAuthenticated,
          });
        } else {
          //generating user profile object, a token for the user, passing the user profile and token to the response
          //the _id sent to the frontend is an object; change if FE requires a string
          const userProfile = getNewUserObject(existingUser, ["firstName", "lastName", "isLoggedin", "username", "email", "image", "_id"]);
          const userID: string = existingUser._id.toString();

        //generating a token for the user, passing the user profile and token to the response
          const token: string = issueToken(userID);
          res.status(200).json({
            message: "You have been logged in.",
            user: userProfile,
            isAuthenticated: isAuthenticated,
            token: token,
          });
        }
      } catch (error) {
        res.status(400).json({
          message: "Server error, password verification failed. Please try again.",
          error: error,
        });
        console.log("Cannot verify password, database or bcrypt error: ", error);
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Server error, we couldn't login the user. Please try again.",
      error: error,
    });
  }
};

// photo upload
const uploadPhoto = async (req: Request, res: Response<ResponseJson>) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "codeconnect_user_photos",
    }); 

    //TODO decide on where the pic is being uploaded, if with authentication and write mongoose functions
    res
    .status(200)
    .json({
        message: "The photo you chose was successfully uploaded.",
        image: uploadResult.url,
    })

  } catch (error) {
    res.status(500).json({
      message: "Server error, we couldn't upload the image. Please try again.",
      error: error,
    });
  }
};

export { register, login, uploadPhoto }