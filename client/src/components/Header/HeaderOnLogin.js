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

const HeaderOnLogin = () => {
  const [showModal, setShowModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const userLogin = JSON.parse(localStorage.getItem("user")) || [];
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user");
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
          <button id="btn-mainpage" onClick={() => navigate("/")}>
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
          <BiSearchAlt2 id="icon-search" />
          <input
            type="search"
            placeholder="Search"
            id="ip-search"
            // value={searchValue}
            // onChange={(e) => setSearchValue(e.target.value)}
          />
        </Col>
        <Col lg="2" md="4" xs="6" id="right-header1">
          <BsBellFill className="cl-hover" id="bell" />
          <AiFillMessage className="cl-hover" id="message" />
          <img
            src="https://cdn.onlinewebfonts.com/svg/img_542942.png"
            alt="avatar"
            className="cl-hover"
            id="avatar"
          />
          <IoIosArrowDown
            id="arrow-avatar"
            onClick={handleArrowClick}
            className={isMenuOpen ? "open" : ""}
          />
          {isMenuOpen && (
            <div className="menu-dropdown" ref={menuRef}>
              <span className="logout" onClick={handleLogout}>
                Đăng xuất
              </span>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderOnLogin;
