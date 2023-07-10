const jwt = require('jsonwebtoken');
const sceretKey = require('../../configs/jwt.config');
const bcrypt = require('bcryptjs');
const sql = require('../../libs/database/db');

class ImageController {
  async handleGetAllImage(req, res) {
    try {
      // Execute the query to get all users
      sql.query('SELECT * FROM images', (err, results) => {
        if (err) {
          console.error('Error handling get users:', err);
          return res.status(500).json({ msg: 'Server error' });
        }

        res.status(200).json({ data: results });
      });
    } catch (error) {
      console.error('Error handling get users:', error);
      res.status(500).json({ msg: 'Server error' });
    }
  }
}

module.exports = new ImageController();
