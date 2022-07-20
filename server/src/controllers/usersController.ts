import { Request, Response } from 'express';
// import { userModel } from "../models/userModel";
import { v2 as cloudinary } from "cloudinary";

// photo upload

const uploadPhoto = async (req: Request, res: Response) => {
  // console.log("req.user", req.user); // with authorisation
  try {
    // console.log("req.file", req.file);
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "codeconnect_user_photos",
    }); 

    // #region TODO decide on where the pic is being uploaded, if with authentication and write mongoose functions
    //
    //   console.log("result", uploadResult)
    // try {
    //     const updatedUser = await userModel.findByIdAndUpdate(
    //         req.user._id,
    //         {image: uploadResult.url},
    //         { new: true }
    //       );
      
    //         if (!updatedUser) {
    //           res
    //           .status(400)
    //           .json({
    //           message: "User does not exist, register first.",
    //           });

    //         } else {
    //#endregion
              res
              .status(200)
              .json({
                  message: "The photo you chose was successfully uploaded.",
                  imageURL: uploadResult.url,
              })
    //#region TODO see the note above
  //}

    // } catch (error) {
    //     res.status(500).json({
    //         message: "Server error, we couldn't upload the image. Please try again.",
    //         error: error,
    //       });
    // }
    //#endregion

  } catch (error) {
    res.status(500).json({
      message: "Server error, we couldn't upload the image. Please try again.",
      error: error,
    });
  }
};

export { uploadPhoto }