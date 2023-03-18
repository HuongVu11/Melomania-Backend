const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
 
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'melomania',
    resource_type: 'auto',
    format: ['mp3', 'mp4', 'wav','jpeg','jpg'],
    upload_preset:'melomania'
  },
});
 
const upload = multer({ storage: storage });
 
module.exports = {upload, cloudinary}