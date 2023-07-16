import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import { BsSuitHeart } from "react-icons/bs";
import { MdOutlineSend } from "react-icons/md";
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
import { UserAPI } from "../../api/User";
import { CommentAPI } from "../../api/Comment";
import { FollowAPI } from "../../api/Follow";
// import { handleCallDocumentAPI } from "../../redux/reducer/DocumentSlice";

const DetailImage = () => {
  const paramsId = useParams();

  const numberId = Number(paramsId.id);
  console.log("id từ param", numberId);
  // const imageList = useSelector((state) => state.infoimage);
  const [imageList, setImageList] = useState([]);
  const [imageChoice, setImageChoice] = useState([]);
  const [userList, setUserList] = useState([]);
  // const [commentList, setCommentList] = useState([]);
  const [loveCommentList, setLoveCommentList] = useState([]);
  const [likeCommentList, setLikeCommentList] = useState([]);
  const [followUserList, setFollowUserList] = useState([]);
  const [loveImageList, setLoveImageList] = useState([]);
  const [likeImageList, setLikeImageList] = useState([]);
  const [allCommentList, setAllCommentList] = useState([]);
  const [isCall, setIsCall] = useState(true);
  const [isCallUser, setIsCallUser] = useState(true);
  const [isComment, setIsComment] = useState(true);
  const [isFollow, setIsFollow] = useState(true);
  const [isOperation, setIsOperation] = useState(true);
  const [isChoiceImg, setIsChoiceImg] = useState(true);

  // gọi dữ liệu API lấy image by Id
  useEffect(() => {
    const fetchImageById = async (id) => {
      try {
        const response = await ImageAPI.getImageById(id);
        setImageChoice(response.data.data);
      } catch (error) {
        console.error("Error retrieving data: ", error);
      }
    };
    if (isChoiceImg) {
      fetchImageById(numberId);
    }
    return () => {
      setIsChoiceImg(false);
    };
  }, [isChoiceImg]);

  console.log("Image đang chọn====>", imageChoice);

  // gọi dữ liệu API users
  useEffect(() => {
    const fetchDataUser = async () => {
      try {
        const response = await UserAPI.getUsers();
        setUserList(response.data.data);
      } catch (error) {
        console.error("Error retrieving data: ", error);
      }
    };
    if (isCallUser) {
      fetchDataUser();
    }
    return () => {
      setIsCallUser(false);
    };
  }, [isCallUser]);

  console.log("userList====>", userList);

  // gọi dữ liệu API images
  const fetchDataImage = async () => {
    try {
      const response = await ImageAPI.getAllImages_Comments();
      console.log(2222, response);
      setImageList(response.data.data);
    } catch (error) {
      console.error("Error retrieving data: ", error);
    }
  };
  useEffect(() => {
    if (isCall) {
      fetchDataImage();
    }
    return () => {
      setIsCall(false);
    };
  }, [isCall]);

  const commentList = imageList.filter(
    (Comment) => Comment.imageCommentId === numberId
  );
  console.log("commentList", commentList);

  // gọi dữ liệu API Comment lấy số lượt yêu thích "Love", "Like"
  useEffect(() => {
    const fetchDataComment = async () => {
      try {
        const response1 = await CommentAPI.getLoveComments();
        const response2 = await CommentAPI.getLikeComments();
        const response3 = await CommentAPI.getAllComments();
        console.log("loveComment====>", response1.data.data);
        console.log("likeComment====>", response2.data.data);
        console.log("AllComment====>", response3.data.data);
        setLoveCommentList(response1.data.data);
        setLikeCommentList(response2.data.data);
        setAllCommentList(response3.data.data);
      } catch (error) {
        console.error("Error retrieving data: ", error);
      }
    };
    if (isComment) {
      fetchDataComment();
    }
    return () => {
      setIsComment(false);
    };
  }, [isComment]);

  // gọi dữ liệu API Follow lấy số lượt follow
  useEffect(() => {
    const fetchDataFollow = async () => {
      try {
        const response = await FollowAPI.getAllFollow_User();
        console.log("followUser====>", response.data.data);
        setFollowUserList(response.data.data);
      } catch (error) {
        console.error("Error retrieving data: ", error);
      }
    };
    if (isFollow) {
      fetchDataFollow();
    }
    return () => {
      setIsFollow(false);
    };
  }, [isFollow]);

  // gọi dữ liệu API Image lấy số lượt LOVE, LIKE ảnh
  useEffect(() => {
    const fetchLoveImage = async () => {
      try {
        const response1 = await ImageAPI.getAllImages_Love();
        const response2 = await ImageAPI.getAllImages_Like();
        console.log("Love Image====>", response1.data.data);
        console.log("Like Image====>", response2.data.data);
        setLoveImageList(response1.data.data);
        setLikeImageList(response2.data.data);
      } catch (error) {
        console.error("Error retrieving data: ", error);
      }
    };
    if (isOperation) {
      fetchLoveImage();
    }
    return () => {
      setIsOperation(false);
    };
  }, [isOperation]);

  const arrLoveByImage = loveImageList.filter(
    (item) => item.idImage === numberId
  );
  const arrLikeByImage = likeImageList.filter(
    (item) => item.idImage === numberId
  );
  console.log("arrLoveImage===>", arrLoveByImage);
  console.log("arrLikeImage===>", arrLikeByImage);

  const countLikeImage = arrLikeByImage.length;
  const countLoveImage = arrLoveByImage.length;

  const countLikeLoveImage = countLikeImage + countLoveImage;
  console.log("countLikeLoveImage", countLikeLoveImage);

  // tìm idUser đã tạo ra ảnh đang xem
  const findUserCreateImage = followUserList.find(
    (item) => item.idImage == numberId
  );
  console.log("findUserCreateImagend", findUserCreateImage?.idUser);
  // đếm số lượt được follow của user này
  const countFollowUser = followUserList.filter(
    (item) => item.idUser === findUserCreateImage.idUser
  ).length;
  console.log("countFollowUser", countFollowUser);

  const imageViewDetail = imageList.find(
    (image) => image.idImage === numberId
  );
  console.log("imgList", imageList);

  const [comment, setComment] = useState("");

  // Đếm số lượng Love của từng comment trong commentList
  const loveByCommentList = commentList?.map(
    (comment) =>
      loveCommentList?.filter(
        (love) => love.idComment == comment.idComment
      ).length
  );
  // tạo ra mảng gồm danh sách các user thích comment đang tương tác
  const arrUserloveComment = commentList?.map((comment) =>
    loveCommentList?.filter(
      (item) => item.idComment === comment.idComment
    )
  );
  console.log("Arr user love comment", arrUserloveComment);

  console.log("Dem love của từng comment", loveByCommentList);
  console.log("all comment===>", allCommentList);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };
  const userLogin =
    JSON.parse(localStorage.getItem("userLogin")) || [];
  const handleAddComment = async () => {
    if (comment.trim() !== "") {
      const newComment = {
        imageCommentId: imageChoice[0].idImage,
        userCommentId: userLogin?.idUser,
        content: comment,
        timecreate: new Date().toISOString().split("T")[0],
      };

      await CommentAPI.postComment(newComment)
        .then((response) => {
          console.log("Comment sent successfully:", response.data);
          // update lại dữ liệu từ DB
          // ------------------------------------?
          fetchDataImage();
          // setIsCall(!isCall);
          // dispatch(handleCallCommentAPI()).unwrap();
          setComment("");
        })
        .catch((error) => {
          // Xử lý khi gửi bình luận gặp lỗi
          console.error("Error sending comment:", error);
        });
    }
  };

  // đếm số lượng nhận xét của ảnh được chọn
  const countComments = imageList?.filter(
    (imageJoinComment) => imageJoinComment.imageCommentId === numberId
  );
  console.log("countComments", countComments.length);
  // đếm số lượng tim yêu thích của từng comment

  const handleHeartClick = async (id) => {
    const commentHeart = imageList?.find(
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

  const [showRenderUserOperation, setShowRenderUserOperation] =
    useState(false);
  const renderUserOperationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        renderUserOperationRef.current &&
        !renderUserOperationRef.current.contains(event.target)
      ) {
        setShowRenderUserOperation(false);
      }
    };

    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleViewDetail = () => {
    setShowRenderUserOperation(true);
  };

  return (
    <Container id="wrap-detail">
      <div id="left-area">
        <img
          src={imageChoice[0]?.linkImage}
          alt="detail image"
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
                <img src={imageViewDetail?.avatarUser} alt="" />
              </div>
              <div id="username-count-follow">
                <span id="sp-username">
                  {imageViewDetail?.username}
                </span>
                <span>{countFollowUser} người theo dõi</span>
              </div>
            </div>
            <div id="userCreate-follow-right">
              <button id="btn-follow">Theo dõi</button>
            </div>
          </div>
          <p id="id-source-img">
            <u>{imageViewDetail?.sourceImage}</u>
          </p>

          <h5 id="id-title-image">{imageViewDetail?.titleImage}</h5>
          <p id="id-descrip-img">{imageViewDetail?.description}</p>
          <br />
          <p id="id-count-comment">
            <h5>
              <span>{countComments.length} </span>{" "}
              <span>Nhận xét</span>{" "}
              <IoIosArrowDown id="id-arrowdown" />
            </h5>
          </p>
          <div className="wrapper-comments">
            {commentList &&
              commentList.map((comment, index) => {
                return (
                  <div className="show-comment" key={index}>
                    <div className="avatar-comment">
                      <img src={comment.avatarUser} alt="" />
                    </div>
                    <div className="view-comment">
                      <div>
                        <b>{comment.username}</b>
                        <span className="content-comment">
                          {comment.content}
                        </span>
                      </div>
                      <div className="action-comment">
                        <span>{comment.timecreate.slice(0, 10)}</span>
                        <span className="ans-comment">Trả lời</span>
                        <span className="ans-heart">
                          {/* đếm số lượt yêu thích */}
                          {loveByCommentList[index] > 0 ? (
                            <AiFillHeart
                              id="id-heart"
                              onClick={() =>
                                handleHeartClick(comment.idComment)
                              }
                              className={
                                loveByCommentList[index] > 0
                                  ? "active"
                                  : ""
                              }
                            />
                          ) : (
                            <AiOutlineHeart
                              id="id-heart"
                              onClick={() =>
                                handleHeartClick(comment.idComment)
                              }
                            />
                          )}

                          {/* ------------------------------------------------------- */}
                          <div id="wrap-love-comment">
                            <span id="count-love-coment">
                              {" "}
                              {loveByCommentList[index] > 0
                                ? loveByCommentList[index]
                                : ""}
                            </span>
                            <div className="show-user-love">
                              {loveByCommentList[index] > 0 &&
                                arrUserloveComment[index]?.map(
                                  (userlove) => {
                                    return (
                                      <div
                                        className="row-mini-love"
                                        key={userlove}
                                      >
                                        <div>
                                          <span>
                                            <img
                                              src={
                                                userlove.avatarUser
                                              }
                                              alt=""
                                            />
                                          </span>
                                          <span className="name-uselove">
                                            {userlove.username}
                                          </span>
                                        </div>
                                        <div>
                                          <AiFillHeart className="heart-userlove" />
                                        </div>
                                      </div>
                                    );
                                  }
                                )}
                            </div>
                          </div>

                          {/* ------------------------------------------------------- */}
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
        </div>

        <div id="right-area-bottom">
          {/* <hr /> */}
          <div id="you-think">
            <span style={{ fontWeight: 600 }}>Bạn nghĩ gì?</span>

            <div className="emotion-image">
              <div className="icon-count">
                <div className="icon-users">
                  {countLikeImage > 0 ? <MdTagFaces /> : ""}
                  {countLoveImage > 0 ? (
                    <BiSolidHappyHeartEyes />
                  ) : (
                    ""
                  )}
                </div>
                <div className="count-icon-users">
                  <span
                    className="number-operation"
                    onClick={handleViewDetail}
                  >
                    {countLikeLoveImage > 0 ? countLikeLoveImage : ""}
                  </span>
                  {showRenderUserOperation && (
                    <div className="overlay">
                      <div
                        ref={renderUserOperationRef}
                        className="render-user-operation"
                      >
                        <p>
                          <BiSolidHappyHeartEyes className="biso-heart" />
                          <MdTagFaces className="tag-face" />
                        </p>
                        <div className="row-render-user">
                          {arrLoveByImage?.map((userLoveImage) => {
                            return (
                              <div
                                key={userLoveImage.idImage}
                                className="wrap-row"
                              >
                                <div className="avatar-name">
                                  <span>
                                    <img
                                      src={userLoveImage.avatarUser}
                                      alt=""
                                    />
                                  </span>
                                  <span className="cl-nameuser">
                                    {userLoveImage.username}
                                  </span>
                                </div>
                                <div>
                                  <BiSolidHappyHeartEyes className="biso-heart1" />
                                </div>
                              </div>
                            );
                          })}
                          {arrLikeByImage?.map((userLikeImage) => {
                            return (
                              <div
                                key={userLikeImage.idImage}
                                className="wrap-row"
                              >
                                <div className="avatar-name">
                                  <span>
                                    <img
                                      src={userLikeImage.avatarUser}
                                      alt=""
                                    />
                                  </span>
                                  <span className="cl-nameuser">
                                    {userLikeImage.username}
                                  </span>
                                </div>
                                <div>
                                  <MdTagFaces className="biso-heart2" />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div id="wrap-heart">
                <CgHeart className="emotion-icon" />
                <div className="emotion-icons">
                  <div className="heart-icon">
                    <b>Thích</b>
                    <BiSolidHappyHeartEyes
                      style={{ width: "40px", height: "40px" }}
                      onClick={() => handleIconClick("heart")}
                    />
                  </div>
                  <div className="thank-icon">
                    <b>Cảm ơn</b>
                    <MdTagFaces
                      style={{ width: "40px", height: "40px" }}
                      onClick={() => handleIconClick("thank")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="bottom-comment">
            {userLogin?.avatarUser == null ? (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&usqp=CAU"
                alt="avatar"
                id="avatar-comment"
              />
            ) : (
              <img
                src={userLogin?.avatarUser}
                alt="avatar"
                id="avatar-comment"
              />
            )}
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
              <MdOutlineSend id="btn-add-comment" />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DetailImage;
