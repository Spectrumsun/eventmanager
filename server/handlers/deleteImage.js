import cloudinary from 'cloudinary';

require('dotenv').config({ path: '.env' });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});


const deletePicture = (newid, oldid) => {
  if (newid !== oldid) {
    cloudinary.v2.uploader.destroy(newid, (error, result) => {
      console.log(result);
    });
  }
};

export default deletePicture;
