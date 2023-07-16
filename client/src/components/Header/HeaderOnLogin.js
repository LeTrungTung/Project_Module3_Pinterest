import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import "./HeaderOnLogin.css";
// import InfoImageAPI from "../../../api/InfoImage";
// import {
//   handleAddImageAPI,
//   handleCallImageAPI,
// } from "../../../redux/reducer/InfoImageSilce";
import ModalForm from "./ModalForm";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HeaderOnLogin = ({ onSearchImage }) => {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchImage, setSearchImage] = useState("");

  const menuRef = useRef();

  const userLogin =
    JSON.parse(localStorage.getItem("userLogin")) || [];
  console.log("user login", userLogin?.avatarUser);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogin");
    window.location.href = "/";
  };

  const handleAddImage = () => {
    setShowModal(true);
    // load lại trang sau khi Edit
    // dispatch(handleCallImageAPI());
  };

  // Xử lý khi Click vào nut xổ xuống bên cạnh Avata user
  const handleArrowClick = () => {
    // setIsMenuOpen(!isMenuOpen);
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  const handleSearchImage = () => {
    onSearchImage(searchImage);
    console.log("value search", searchImage);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Lấy danh sách ảnh từ Redux store
  // const infoimage = useSelector((state) => state.infoimage);

  return (
    <Container fluid id="header1">
      {showModal && (
        <ModalForm show={showModal} setShow={setShowModal} />
      )}
      <Row>
        <Col lg="3" md="4" xs="6" id="left-header1">
          <img
            src="https://img.freepik.com/premium-vector/square-pinterest-logo-isolated-white-background_469489-896.jpg?w=740"
            alt="logomini"
            className="cl-hover"
            id="minilogo"
          />
          <button id="btn-mainpage" onClick={() => navigate("/home")}>
            Trang chủ
          </button>
          <button id="btn-create" onClick={handleAddImage}>
            Thêm ảnh
            <IoIosArrowDown id="arrow-create" />
          </button>
        </Col>

        <Col
          style={{ display: "flex", alignItems: "center" }}
          lg="7"
          md="4"
          xs="1"
        >
          <BiSearchAlt2
            id="icon-search"
            onClick={handleSearchImage}
          />
          <input
            type="search"
            placeholder="Search"
            id="ip-search"
            name="search-image"
            value={searchImage}
            onChange={(e) => setSearchImage(e.target.value)}
          />
        </Col>
        <Col lg="2" md="4" xs="6" id="right-header1">
          <div className="wrap-avata-hover">
            <BsBellFill className="cl-hover" id="bell" />
            <div className="view-hover-avatar">
              <span>Thông báo</span>
            </div>
          </div>
          <div className="wrap-avata-hover">
            <AiFillMessage className="cl-hover" id="message" />
            <div className="view-hover-avatar">
              <span>Tin nhắn</span>
            </div>
          </div>
          <div
            className="wrap-avata-hover"
            onClick={() => {
              navigate("/profile");
            }}
          >
            {userLogin?.avatarUser == null ? (
              <img
                src="https://cdn.onlinewebfonts.com/svg/img_542942.png"
                alt="avatar"
                className="cl-hover"
                id="avatar"
              />
            ) : (
              <img
                src={userLogin?.avatarUser}
                alt="avatar"
                className="cl-hover"
                id="avatar"
              />
            )}
            <div className="view-hover-avatar">
              <span>Hồ sơ của bạn</span>
            </div>
          </div>
          <div className="wrap-avata-hover">
            <IoIosArrowDown
              id="arrow-avatar"
              onClick={handleArrowClick}
              className={isMenuOpen ? "open" : ""}
            />
            <div className="view-hover-avatar">
              <span>Chi tiết tài khoản</span>
            </div>
            {isMenuOpen && (
              <div className="menu-dropdown" ref={menuRef}>
                <span className="profile-logout1">
                  Đang đăng nhập
                </span>
                <div className="row-avataemail-name1 hoverto">
                  {userLogin?.avatarUser == null ? (
                    <img
                      src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-business-man-icon-png-image_4239598.jpg"
                      alt="avata"
                      className="avata-of"
                    />
                  ) : (
                    <img
                      src={userLogin?.avatarUser}
                      alt="avata"
                      className="avata-of"
                    />
                  )}
                  <div className="email-name1">
                    <span>{userLogin?.username}</span>
                    <span>{userLogin?.email}</span>
                  </div>
                </div>
                <span
                  className="profile-logout hoverto"
                  onClick={handleLogout}
                >
                  Đăng xuất
                </span>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderOnLogin;
