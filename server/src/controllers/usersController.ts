import { Request, Response } from 'express';
import { v2 as cloudinary } from "cloudinary";
import { userModel } from '../models/userModel';
import { encryptPassword, verifyPassword } from '../utils/bcrypt';
import { issueAccessToken,issueRefreshToken } from "../utils/jwt"
import { UserProfileEnum, UserRegistrationEnum } from '../utils/userEnums';

//function allowing to create a new object with chosen keys from another object
// const getNewUserObject = (userObject: object, keys: Array<string>): UserN.UserRegistrationData | UserN.UserProfileData => {
  const getNewUserObject = (userObject: object, keys: Array<string>) => {

    // let newUserObject: UserN.UserRegistrationData | UserN.UserProfileData;
    let newUserObject = {};

  keys.forEach(key => {
    if (userObject[key]) {
      newUserObject[key] = userObject[key];
    }
  }) 
    return newUserObject;
};

//TODO define the request

const register = async (req: Request, res: Response<ResponseJson>) => {
  try {
      //first check if the user already exists in mongoDB: code 400 Bad Request or proceed to create a new user
    const checkIfUserExists: UserN.UserData | null = await userModel.findOne({

      email: req.body.email,
    });

    if (checkIfUserExists) {
      res.status(400).json({
        message:
          "User with this email address already exists.",
      });
    } else {
      //user with this email does not exist yet, creating a new user object with a hashed password
      const newUserData = getNewUserObject(req.body, Object.values(UserRegistrationEnum));
      const hashedPassword = await encryptPassword(req.body.password);
      newUserData["password"] = hashedPassword;
      newUserData["isLoggedin"] = true; 
      
      //creating a mongoose model, saving it in mongoDB with a mongoose save() method
      const newUser = new userModel(newUserData); 

      try {
        const savedUser = await newUser.save();
        // creating the user profile object, the keys are defined in the UserProfile enum
        const userProfile = getNewUserObject(savedUser, Object.values(UserProfileEnum));
            
//TODO the _id sent to the frontend is an object; change if FE requires a string

        //generating refresh / access tokens for the user, passing the user profile and tokens to the response (refresh in a cookie)
        const userID: string = savedUser._id.toString();
        const accessToken: string = issueAccessToken(userID)
        const refreshToken: string = issueRefreshToken(userID)
          //cookie with a refresh token
          res.cookie('refreshToken', refreshToken, {
          httpOnly: true,
          });
        res.status(201).json({
          message: "New user account has been created. Welcome to codeconnect",
          user: userProfile, 
          accessToken: accessToken,
        })
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
          //updating the isLoggedin value in the database to true
          existingUser.isLoggedin = true; 

          try {        
            const loggedinUser = await existingUser.save()
            //generating user profile object, a token for the user, passing the user profile and token to the response
            const userProfile = getNewUserObject(loggedinUser, Object.values(UserProfileEnum));
            
//TODO the _id sent to the frontend is an object; change if FE requires a string

            //generating refresh / access tokens for the user, passing the user profile and tokens to the response (refresh in a cookie)
            const userID: string = loggedinUser._id.toString();

            const accessToken: string = issueAccessToken(userID)
            const refreshToken: string = issueRefreshToken(userID)

            //cookie with a refresh token
            res.cookie('refreshToken', refreshToken, {
              httpOnly: true,
            });
            res.status(200).json({
              message: "You have been logged in.",
              user: userProfile,
              isAuthenticated: isAuthenticated,
              accessToken: accessToken,
            })
          } catch (error) {
              res.status(500).json({
              message: "Server error, we couldn't login the user: saving the login status in the database failed. Please try again.",
              error: error,
                });
          }
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

//TODO check 403 response for unsuccesful login

const logout = async (req, res: Response<ResponseJson>) => {

//TODO had to remove the req. type, as it was referring to the express request and not to passport. What to do here?

  try {
    const userToLogout = req.user
    userToLogout.isLoggedin = false;
    const loggedoutUser = await userToLogout.save()
    if (!loggedoutUser) {
      res.status(500).json({
        message: "Server error, we couldn't logout the user. Please try again.",
      })
    } else {
      res.clearCookie('refreshToken', {
        httpOnly: true,
      })
      res.status(200).json({
        message: "You have been logged out."
      })
    }
  } catch (error) {
      res.status(500).json({
      message: "Server error, we couldn't logout the user. Please try again.",
      error: error,
    });
  }

};

const updateProfile = async (req, res: Response<ResponseJson>) => {

  try {
    const userToUpdate = req.user;
    const newUserData = { ...userToUpdate, ...req.body };
    const updatedUser = await newUserData.save()
    if (!updatedUser) {
      res.status(500).json({
        message: "Server error, we couldn't logout the user. Please try again.",
      })
    } else {
      const updatedUserProfile = getNewUserObject(updatedUser, Object.values(UserProfileEnum));
      res.status(200).json({
        message: "Your profile has been updated.",
        user: updatedUserProfile,
      })
    }
  } catch (error) {
      res.status(500).json({
      message: "Server error, we couldn't update the profile. Please try again.",
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


//TODO write get/update profile -> routes requiring autorisation

export { getNewUserObject, register, login, logout, updateProfile, uploadPhoto }