import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

/* This multer-Cloudinary storage config file is for uploading files directly to Cloudinary (cloud media management service).
folder: keeps avatars organized in the Cloudinary media library. crop: "limit" resizes anything larger than 500x500 down to fit,
without upscaling smaller images or distorting aspect ratio. fileSize: 2 * 1024 * 1024 enforces a 2MB limit server-side, before Cloudinary even receives an oversized file.
This handles the max size but a minimum-dimension for uploads will be handled client-side with a message to users. */

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "brief-io-avatars",
        allowed_formats: ["jpg", "jpeg", "png", "webp"],
        transformation: [{ width: 500, height: 500, crop: "limit" }],
    },
});

const avatarUpload = multer({

    storage: storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit

});

export default avatarUpload;