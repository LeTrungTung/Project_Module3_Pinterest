const jwt = require('jsonwebtoken');
const sceretKey = require('../../configs/jwt.config');
const bcrypt = require('bcryptjs');
const sql = require('../../libs/database/db');

class CommentController {
  // lấy API số lượt thả "TIM" từ bảng like_love_comment join với comments, users
  async handleGetLoveComment(req, res) {
    try {
      sql.query(
        `select * from like_love_comment 
      join comments on comments.idComment=like_love_comment.commentLikeLoveId 
      join users on users.idUser=like_love_comment.userLoveCommentId`,
        (err, results) => {
          if (err) {
            console.error('Error handling get users:', err);
            return res.status(500).json({ msg: 'Server error' });
          }

          res.status(200).json({ data: results });
        }
      );
    } catch (error) {
      console.error('Error handling get comments:', error);
      res.status(500).json({ msg: 'Server error' });
    }
  }

  // lấy API số lượt thả "LIKE" từ bảng like_love_comment join với comments, users
  async handleGetLikeComment(req, res) {
    try {
      sql.query(
        `select * from like_love_comment 
      join comments on comments.idComment=like_love_comment.commentLikeLoveId 
      join users on users.idUser=like_love_comment.userLikeCommentId`,
        (err, results) => {
          if (err) {
            console.error('Error handling get comments:', err);
            return res.status(500).json({ msg: 'Server error' });
          }

          res.status(200).json({ data: results });
        }
      );
    } catch (error) {
      console.error('Error handling get users:', error);
      res.status(500).json({ msg: 'Server error' });
    }
  }
}

module.exports = new CommentController();
