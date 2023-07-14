const jwt = require('jsonwebtoken');
const sceretKey = require('../../configs/jwt.config');
const bcrypt = require('bcryptjs');
const sql = require('../../libs/database/db');

class ImageController {
  // lấy API bảng images
  handleGetAllImage(req, res) {
    // Execute the query to get all users
    sql.query(`SELECT * FROM images`, (err, results) => {
      if (err) {
        console.error('Error handling get images:', err);
        return res.status(500).json({ msg: 'Server error' });
      }
      console.log('data', results);
      res.status(200).json({ data: results });
    });
  }

  // lấy API bảng images JOIN bảng comment VÀ users
  async handleGetAllImageComment(req, res) {
    try {
      // Execute the query to get all users
      sql.query(
        'SELECT * FROM images JOIN comments ON images.idImage=comments.imageCommentId JOIN users ON users.idUser=comments.userCommentId',
        (err, results) => {
          if (err) {
            console.error('Error handling get users:', err);
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

  // lấy API bảng images JOIN bảng operation_image VÀ users
  async handleGetLoveImage(req, res) {
    try {
      // Execute the query to get all users
      sql.query(
        `select * from operation_image
        join images on images.idImage=operation_image.imageOperationId
        join users on operation_image.userLoveImageId=users.idUser`,
        (err, results) => {
          if (err) {
            return res.status(500).json({ msg: 'Server error' });
          }

          res.status(200).json({ data: results });
        }
      );
    } catch (error) {
      res.status(500).json({ msg: 'Server error' });
    }
  }

  async handleGetLikeImage(req, res) {
    try {
      sql.query(
        `select * from operation_image
        join images on images.idImage=operation_image.imageOperationId
        join users on operation_image.userLikeImageId=users.idUser`,
        (err, results) => {
          if (err) {
            return res.status(500).json({ msg: 'Server error' });
          }

          res.status(200).json({ data: results });
        }
      );
    } catch (error) {
      res.status(500).json({ msg: 'Server error' });
    }
  }
}

module.exports = new ImageController();
