import React, { useState } from "react";
import "./Login.css";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { login } from "../../redux/reducer/UserSlice";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({});
  const dispatch = useDispatch();
  //handle cho Input
  const handleInputChange = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  //handle cho Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(inputValue)).unwrap();
    //dispath thanh cong thi ve trang chu
    if (data && data.status === false) {
      alert("Tài khoản đã bị khóa.");
      return;
    }
    data && navigate("/");
  };
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={handleSubmit}>
              {/* Email input */}
              <h2 id="id-title">Login Here</h2>
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  placeholder="Email address"
                  name="email"
                  onChange={handleInputChange}
                  className="form-control form-control-lg"
                />
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  placeholder="Password"
                  name="password"
                  onChange={handleInputChange}
                  className="form-control form-control-lg"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block"
                id="btn-login"
              >
                Login
              </button>
              <br />
              <NavLink
                to={"/auth/register"}
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  textDecoration: "none",
                  color: "blue",
                }}
              >
                If you don't have an account, <u>register here</u>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
