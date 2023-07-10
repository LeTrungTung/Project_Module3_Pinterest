// const sql = require("../../libs/database/db");

// const modelPostRegister = (newUser, res) => {
//   // Kiểm tra user đã tồn tại trong CSDL chưa
//   const checkUserQuery = `SELECT * FROM users WHERE email = ?`;
//   sql.query(checkUserQuery, [newUser.email], (err, result) => {
//     if (err) {
//       console.error("Error executing query: ", err);
//       res.status(500).json({ msg: "Server error" });
//       return;
//     }
//     if (result.length > 0) {
//       res.status(400).json({ message: "User already exists" });
//       return;
//     }
//     // nếu chưa có User thì cho thêm mới
//     const insertData = `INSERT INTO users SET ?`;
//     sql.query(insertData, newUser, (err, result) => {
//       if (err) {
//         console.log("loi roi");
//         res.status(500).json({ msg: "Lỗi server" });
//         return;
//       }
//       res.status(200).json({ msg: "Register thành công" });
//     });
//   });
// };
