import React, { useState } from "react";
import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kiểm tra dữ liệu và xử lý đăng ký
    const errors = {};

    if (username.trim() === "") {
      errors.username = "Vui lòng nhập tên đăng nhập!";
    }

    if (email.trim() === "") {
      errors.email = "Vui lòng nhập email!";
    } else if (!isValidEmail(email)) {
      errors.email = "Email không đúng định dạng!";
    }

    if (password.trim() === "") {
      errors.password = "Vui lòng nhập mật khẩu!";
    } else if (password.length < 8) {
      errors.password = "Mật khẩu phải có ít nhất 8 ký tự!";
    }

    if (repassword.trim() === "") {
      errors.repassword = "Vui lòng nhập lại mật khẩu!";
    } else if (password !== repassword) {
      errors.repassword = "Mật khẩu không trùng khớp!";
    }

    if (Object.keys(errors).length === 0) {
      // Nếu không có lỗi, chuyển hướng đến "/login"
      navigate("/login");
    }

    setErrors(errors);
  };

  const isValidEmail = (value) => {
    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  //   useEffect(() => {
  //     if (redirectToLogin) {
  //       // Sử dụng hàm điều hướng để chuyển hướng đến "/login"
  //       return <Navigate to="/login" />;
  //     }
  //   }, [redirectToLogin]); // Chạy useEffect khi redirectToLogin thay đổi

  return (
    <div className="register-container">
      <div className="wrap-header-content">
        <header>
          <NavLink to={"/"}>
            <img
              src="https://logos-world.net/wp-content/uploads/2020/09/Pinterest-Logo.png"
              alt="Logo"
            />
          </NavLink>
        </header>
        <div className="register-content">
          <div className="nature-image">
            <img
              src="https://i.pinimg.com/736x/c5/92/13/c59213b89e9a0f60b25a705fa684c537.jpg"
              alt="image"
            />
          </div>
          <form className="register-form" onSubmit={handleSubmit}>
            <h2>Đăng ký</h2>
            <input
              type="text"
              placeholder="Tên đăng nhập"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {errors.username && (
              <p className="error">{errors.username}</p>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            <input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="error">{errors.password}</p>
            )}
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
            {errors.repassword && (
              <p className="error">{errors.repassword}</p>
            )}
            <button type="submit">Đăng ký</button>
            <p className="note-register">
              Nếu bạn đã có tài khoản?{" "}
              <NavLink to={"/Login"}>Đăng nhập đây</NavLink>
            </p>
          </form>
        </div>
      </div>
      <footer>
        <span>Điều khoản dịch vụ</span>
        <span>Chính sách</span>
        <span>Trợ giúp</span>
        <span>Người dùng</span>
        <span>Khám phá</span>
      </footer>
    </div>
  );
};

export default Register;
