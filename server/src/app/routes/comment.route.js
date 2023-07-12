const express = require('express');
const CommentController = require('../controllers/commentController');
const checkAuthentication = require('../middlewares/checkAuth');
const router = express.Router();

router.get('/get-love-comment', CommentController.handleGetLoveComment);
router.get('/get-like-comment', CommentController.handleGetLikeComment);

router.get('/', (req, res) => {
  res.json('Comments Ok');
});

module.exports = router;
