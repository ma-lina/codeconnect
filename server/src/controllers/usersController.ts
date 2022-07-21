import { Request, Response } from 'express';
import { v2 as cloudinary } from "cloudinary";

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

export { uploadPhoto }