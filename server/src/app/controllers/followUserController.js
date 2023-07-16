const jwt = require('jsonwebtoken');
const sceretKey = require('../../configs/jwt.config');
const bcrypt = require('bcryptjs');
const sql = require('../../libs/database/db');

class FollowUserController {
  // lấy API số lượt follow từ bảng users join với follows, images
  async handleGetFollowUser(req, res) {
    try {
      sql.query(
        `SELECT users.*, follows.*,images.userCreateId,images.idImage
        FROM users
        JOIN images ON images.userCreateId = users.idUser
        JOIN follows ON users.follow = follows.idFollow`,
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
  // lấy users được theo dõi
  async handleGetUserFollowed(req, res) {
    try {
      sql.query(
        `select * from follows join users on users.idUser=follows.userFollowedbyId where users.idUser=${req.params.id}`,
        (err, results) => {
          if (err) {
            console.error('Error handling get followed:', err);
            return res.status(500).json({ msg: 'Server error' });
          }

          res.status(200).json({ data: results });
        }
      );
    } catch (error) {
      console.error('Error handling get followed:', error);
      res.status(500).json({ msg: 'Server error' });
    }
  }

  // lấy users đang theo dõi người khác
  async handleGetUserFollowOther(req, res) {
    try {
      sql.query(
        `select * from  follows 
        join users on users.idUser=follows.userFollowOtherId
        where users.idUser=${req.params.id}`,
        (err, results) => {
          if (err) {
            console.error('Error handling get followed:', err);
            return res.status(500).json({ msg: 'Server error' });
          }

          res.status(200).json({ data: results });
        }
      );
    } catch (error) {
      console.error('Error handling get followed:', error);
      res.status(500).json({ msg: 'Server error' });
    }
  }
}

module.exports = new FollowUserController();
