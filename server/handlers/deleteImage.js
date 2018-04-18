import cloudinary from 'cloudinary';

require('dotenv').config({ path: '.env' });

// config coloudinary for image
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// delete image from cloudinary
const deletePicture = (newid, oldid) => {
  console.log("newid", newid, oldid)
  if (newid !== oldid) {
    cloudinary.v2.uploader.destroy(newid, (error, result) => {
      console.log(result);
    });
  }
};

export default deletePicture;
