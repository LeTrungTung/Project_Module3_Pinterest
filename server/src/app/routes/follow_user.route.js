const express = require('express');
const FollowUserController = require('../controllers/followUserController');
const router = express.Router();

router.get('/get-follow-user', FollowUserController.handleGetFollowUser);

router.get('/', (req, res) => {
  res.json('Follows Ok');
});

module.exports = router;
