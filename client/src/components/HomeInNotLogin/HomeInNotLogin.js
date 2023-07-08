import React from "react";
import "./HomeInNotLogin.css";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
const HomeInNotLogin = () => {
  //   const user = useSelector((state) => state.user);
  //   console.log("user", user);
  const navigate = useNavigate();
  return (
    <div id="id-header">
      <div id="logo">
        <img
          src="https://cloud.taggbox.com/taggbox/assets/img/social-logo/pinterest.png"
          alt="logo"
        />
      </div>
      <div id="right-header">
        <div id="title-header">
          <Link></Link>
          <Link>Giới thiệu</Link>
          <Link>Doanh nghiệp</Link>
          <Link>Blog</Link>
        </div>
        <div id="btn-header">
          <button
            id="btn-login"
            onClick={() => {
              navigate("/login");
            }}
          >
            Đăng nhập
          </button>
          <button
            id="btn-register"
            onClick={() => {
              navigate("/register");
            }}
          >
            Đăng ký
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeInNotLogin;
