import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { BiSolidHappyHeartEyes } from "react-icons/bi";
import { MdTagFaces } from "react-icons/md";
import { CgHeart } from "react-icons/cg";
import "./DetailImage.css";
import { useLocation, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
// import CommentAPI from "../../api/Comment";
// import { handleCallCommentAPI } from "../../redux/reducer/CommentSlice";
import { ClassNames } from "@emotion/react";
// import DocumentAPI from "../../api/Document";
import { ImageAPI } from "../../api/Image";
// import { handleCallDocumentAPI } from "../../redux/reducer/DocumentSlice";

const DetailImage = () => {
  const paramsId = useParams();

  const numberId = Number(paramsId.id);
  console.log("id từ param", numberId);
  // const imageList = useSelector((state) => state.infoimage);
  const [imageList, setImageList] = useState([]);
  const [isCall, setIsCall] = useState(true);

  useEffect(() => {
    const fetchDataImage = async () => {
      try {
        const response = await ImageAPI.getAllImages_Comments();
        console.log(2222, response);
        setImageList(response.data.data);
      } catch (error) {
        console.error("Error retrieving data: ", error);
      }
    };
    if (isCall) {
      fetchDataImage();
    }
    return () => {
      setIsCall(false);
    };
  }, [isCall]);

  //  Gọi dữ liệu comment từ redux về
  // const commentList = useSelector((state) => state.comments);
  // console.log("cm,", commentList);
  const commentList = imageList.filter(
    (imageJoinComment) => imageJoinComment.imageCommentId === numberId
  );
  console.log("commentList", commentList);

  const imageViewDetail = imageList.find(
    (image) => image.idImage === numberId
  );
  console.log("imgList", imageList);

  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const userLogin = JSON.parse(localStorage.getItem("user")) || [];
  console.log("login", userLogin);
  // const dispatch = useDispatch();
  const handleAddComment = () => {
    // if (comment.trim() !== "") {
    //   const newComment = {
    //     avatar:
    //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU",
    //     idUser: userLogin.id,
    //     idImage: Number(paramsId.id),
    //     person: userLogin.name,
    //     note: comment,
    //     heart: 0,
    //     timecreate: new Date().toLocaleDateString("en-GB"),
    //   };
    // CommentAPI.postComment(newComment)
    //   .then((response) => {
    //     console.log("Comment sent successfully:", response.data);
    //     // update lại dữ liệu từ DB về Redux
    //     dispatch(handleCallCommentAPI()).unwrap();
    //     setComment("");
    //   })
    //   .catch((error) => {
    //     // Xử lý khi gửi bình luận gặp lỗi
    //     console.error("Error sending comment:", error);
    //   });
    // }
  };

  // đếm số lượng nhận xét của ảnh được chọn
  const countComments = imageList.filter(
    (imageJoinComment) => imageJoinComment.imageCommentId === numberId
  );
  console.log("countComments", countComments.length);

  const handleHeartClick = async (id) => {
    const commentHeart = imageList.find(
      (imageJoinComment) => imageJoinComment.idComment === id
    );
    console.log("comment", commentHeart);

    //   await CommentAPI.updateLike({
    //     ...commentHeart,
    //     heart: commentHeart.heart + 1,
    //   }).then(() => dispatch(handleCallCommentAPI()).unwrap());
  };

  // handle save

  // const documentList = useSelector((state) => state.documents);
  // console.log("listDC", documentList);

  // kiểm tra ảnh đang xem đã được lưu chưa
  let isSaved = false;
  // const dataSavedImage = documentList.filter(
  //   (document) => document.idUser === userLogin.id
  // );
  // console.log(66, dataSavedImage);
  // if (dataSavedImage.length > 0) {
  //   const checkdata = dataSavedImage.find(
  //     (item) => +item.idImage === +numberId
  //   );
  //   console.log("check", checkdata);
  //   isSaved =
  //     checkdata !== undefined && checkdata !== null ? true : false;
  // }
  // console.log("IsSaved", isSaved);

  const handleSaveImage = async () => {
    // const newDocumment = {
    //   idUser: userLogin.id,
    //   idImage: numberId,
    //   timecreate: new Date().toLocaleDateString("en-GB"),
    // };
    // nếu ảnh chưa lưu thì add ảnh vào API, ngược lại thì không
    // if (!isSaved) {
    //   // const data = await dispatch(
    //   //   handleCallDocumentAPI(newDocumment)
    //   // ).unwrap();
    //   if (data) {
    //     console.log("tao thanh cong");
    //   }
    // }
  };

  // Xử lý biểu tượng cảm xúc hình ảnh
  const [showIcons, setShowIcons] = useState(false);
  const [chooseIcon, setChooseIcon] = useState("");
  const handleMouseOver = () => {
    setShowIcons(true);
  };
  const handleMouseOut = () => {
    setShowIcons(false);
  };
  const handleIconClick = (icon) => {
    // Xử lý khi người dùng chọn biểu tượng
    console.log("Selected icon:", icon);
    if (icon == "heart") {
      setChooseIcon(<BiSolidHappyHeartEyes />);
    } else {
      setChooseIcon(<MdTagFaces />);
    }
  };

  return (
    <Container id="wrap-detail">
      <div id="left-area">
        <img
          src={imageViewDetail?.linkImage}
          alt=""
          id="img-detail"
        />
      </div>
      <div id="right-area">
        <div id="right-area-top">
          <div id="top-right">
            <div id="document-save">
              <div id="id-document">
                <span>Hồ sơ </span>
                <IoIosArrowDown />
              </div>
              <div>
                <button
                  id="id-save"
                  onClick={() => handleSaveImage(numberId)}
                  className={isSaved ? "saved" : ""}
                >
                  {isSaved ? "Đã lưu" : "Lưu"}
                </button>
              </div>
            </div>
            <div>
              <BsThreeDots id="id-dot" />
            </div>
          </div>
          <div id="userCreate-follow">
            <div id="userCreate-follow-left">
              <div id="avatar-create-img">
                <img
                  src="https://image.pngaaa.com/277/2021277-middle.png"
                  alt=""
                />
              </div>
              <div id="username-count-follow">
                <span id="sp-username">username</span>
                <span>??? người theo dõi</span>
              </div>
            </div>
            <div id="userCreate-follow-right">
              <button id="btn-follow">Theo dõi</button>
            </div>
          </div>
          <p id="id-source-img">
            <u>{imageViewDetail?.sourceImage}</u>
          </p>
          <h3 id="id-title-image">{imageViewDetail?.titleImage}</h3>
          <br />
          <p id="id-count-comment">
            <h5>
              <span>{countComments.length} </span>{" "}
              <span>Nhận xét</span>{" "}
              <IoIosArrowDown id="id-arrowdown" />
            </h5>
          </p>
          {commentList &&
            commentList.map((comment, index) => {
              return (
                <div className="show-comment">
                  <div className="avatar-comment">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/700/700674.png"
                      alt=""
                    />
                  </div>
                  <div className="view-comment">
                    <div>
                      <b>{comment.username}</b>
                      <span className="content-comment">
                        {comment.content}
                      </span>
                    </div>
                    <div className="action-comment">
                      <span>
                        {/* {comment.timecreate} */}????Date tạo
                      </span>
                      <span className="ans-comment">Trả lời</span>
                      <span>
                        {/* {comment.heart > 0 ? (
                          <AiFillHeart
                            id="id-heart"
                            onClick={() => handleHeartClick(item.id)}
                            className={item.heart > 0 ? "active" : ""}
                          />
                        ) : (
                          <AiOutlineHeart
                            id="id-heart"
                            onClick={() => handleHeartClick(item.id)}
                          />
                        )} */}
                        <AiOutlineHeart
                          id="id-heart"
                          onClick={() => handleHeartClick(comment.id)}
                        />
                        {/* {comment.heart > 0 ? comment.heart : ""} */}
                        ?số thả tim
                      </span>
                      <span>
                        <BsThreeDots id="id-dots" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div id="right-area-bottom">
          {/* <hr /> */}
          <div id="you-think">
            <span style={{ fontWeight: 600 }}>Bạn nghĩ gì?</span>
            <div
              className="emotion-image"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <div className="icon-count">
                <div className="icon-users">
                  {chooseIcon == "" ? "" : chooseIcon}
                </div>
                <div className="count-icon-users">5</div>
              </div>
              <CgHeart className="emotion-icon" />

              {showIcons && (
                <div className="emotion-icons">
                  <BiSolidHappyHeartEyes
                    className="heart-icon"
                    onClick={() => handleIconClick("heart")}
                  />
                  <MdTagFaces
                    className="thank-icon"
                    onClick={() => handleIconClick("thank")}
                  />
                </div>
              )}
            </div>
          </div>
          <div id="bottom-comment">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU"
              alt=""
              id="avatar-comment"
            />
            <input
              type="text"
              placeholder="Thêm nhận xét"
              id="add-content-comment"
              value={comment}
              onChange={handleCommentChange}
            />
            <button
              style={{ border: "none", backgroundColor: "white" }}
              onClick={handleAddComment}
            >
              <BsFillCaretRightSquareFill id="btn-add-comment" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailImage;
