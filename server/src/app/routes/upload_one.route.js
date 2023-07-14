// const express = require('express');
// const UploadController = require('../controllers/uploadController');
// const checkAuthentication = require('../middlewares/checkAuth');
// const router = express.Router();

// const multer=require('multer')

// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, '/public/');
//   },
//   filename: function(req, file, cb) {
//     const fileName=file.originalname.toLowerCase().split(' ').join('-')
//     cb(null, uuidv4() + '-' + fileName);
//   }, //tạo đường ảnh ngẫu nhiên
// });
//  const upload=multer({
//   storage:storage,
//   fileFilter: (req, file, callback) {

//   }

//  })
// // router.get('/get-image', UploadController.handleUploadOne);

// module.exports = router;
