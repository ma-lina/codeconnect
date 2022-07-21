import { Request, Response } from 'express';
import { v2 as cloudinary } from "cloudinary";
import { userModel } from '../models/userModel';
import { encryptPassword } from '../utils/bcrypt';

const register = async (req: Request, res: Response) => {
  try {
//first check if the user already exists in mongoDB: code 400 Bad Request or proceed to create a new user
      const checkIfUserExists = await userModel.findOne({
      email: req.body.email,
    });

    if (checkIfUserExists) {
      res.status(400).json({
        message:
          "User with this email address already exists.",
      });
    } else {

      // TODO: validate the password using express validator middleware

      const hashedPassword = await encryptPassword(req.body.password);

      const newUser = new userModel({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        user_name: req.body.user_name,
        password: hashedPassword,
        email: req.body.email,
        image: req.body.image,
      });

      try {
        const savedUser = await newUser.save();
        res.status(201).json({
          message:
            "New user account has been created. Please log in.",
//TODO need to decide if the user logs in or is already logged in after registration. No need to return user object if login required. 
            // user: {
          //   first_name: savedUser.first_name,
          //   last_name: savedUser.last_name,
          //   user_name: savedUser.user_name,
          //   password: hashedPassword,
          //   email: savedUser.email,
          //   image: savedUser.image,
          // },
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

const login = async (req: Request, res: Response) => {
  try {


  } catch (error) {
    res.status(500).json({
      message: "Server error, we couldn't login the user. Please try again.",
      error: error,
    });
  }
};

// photo upload
const uploadPhoto = async (req: Request, res: Response) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "codeconnect_user_photos",
    }); 

    //TODO decide on where the pic is being uploaded, if with authentication and write mongoose functions
    res
    .status(200)
    .json({
        message: "The photo you chose was successfully uploaded.",
        imageURL: uploadResult.url,
    })

  } catch (error) {
    res.status(500).json({
      message: "Server error, we couldn't upload the image. Please try again.",
      error: error,
    });
  }
};

export { register, login, uploadPhoto }