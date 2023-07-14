const express = require('express');
const ImageController = require('../controllers/imageController');
const checkAuthentication = require('../middlewares/checkAuth');
const router = express.Router();

// router.post('/image', ImageController.handleAddImage);

router.get('/get-image', ImageController.handleGetAllImage);
router.get('/get-image-comment', ImageController.handleGetAllImageComment);
router.get('/get-image-love', ImageController.handleGetLoveImage);
router.get('/get-image-like', ImageController.handleGetLikeImage);

router.get('/', (req, res) => {
  res.json('Ok');
});

module.exports = router;
