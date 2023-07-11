import React, { useState } from "react";
import "./Login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Sử dụng hook useNavigate
  const dipatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Kiểm tra dữ liệu và xử lý đăng ký
    // const errors = {};

    // if (email.trim() === "") {
    //   errors.email = "Vui lòng nhập email!";
    // } else if (!isValidEmail(email)) {
    //   errors.email = "Email không đúng định dạng!";
    // }

    // if (password.trim() === "") {
    //   errors.password = "Vui lòng nhập mật khẩu!";
    // }

    // if (Object.keys(errors).length === 0) {
    //   // Nếu không có lỗi, chuyển hướng đến "/login"
    //   navigate("/");
    // }

    // setErrors(errors);
    const data = await dipatch(
      login({ username, password })
    ).unwrap();
    console.log(data);
  };

  const isValidEmail = (value) => {
    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div className="login-content">
      <div className="nature-image">
        <img
          src="https://thuthuatphanmem.vn/uploads/2018/08/21/hinh-nen-thien-nhien-phong-canh-dep-4_043141001.jpg"
          alt="image"
        />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Đăng nhập</h2>
        <input
          type="text"
          placeholder="Email"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
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

        <button type="submit">Đăng nhập</button>
        <p className="note-login">
          Nếu bạn chưa có tài khoản?{" "}
          <NavLink to={"/register"}>Đăng ký tại đây</NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
