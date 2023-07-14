import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import React, { useState } from "react";
import "./ModalForm.css";
import axios from "axios";
import axiosClient from "../../api/axiosClient";

function ModalForm(props) {
  const [imgServer, setImgServer] = useState("");
  const [dataForm, setDataForm] = useState({
    userCreateId: "", //cập nhật thêm id của user tạo ảnh
    titleImage: "",
    description: "",
    sourceImage: "",
    categoryImage: "",
  });

  const handleClose = () => props.setShow(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const dataFromPost = dataForm;
    dataFromPost.linkImage = imgServer;
    console.log(dataFromPost);
    // tạo đường dẫn Post ảnh lên

    const newImage = {
      userCreateId: 4,
      linkImage: dataFromPost.linkImage,
      categoryImage: dataFromPost.categoryImage,
      titleImage: dataFromPost.titleImage,
      description: dataFromPost.description,
      sourceImage: dataFromPost.sourceImage,
    };
    axiosClient
      .post("/api/v1/upload-image", newImage)
      .then((response) => {
        console.log(response.data);
        // fetchData();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    // lấy hình ảnh được post lên bằng Multer
    axiosClient({
      method: "POST",
      url: "/api/v1/upload-one",
      data: { uploadImage: file },
      headers: {
        "Content-Type": "multipart/form-data; ",
      },
    })
      .then((data) => {
        console.log(data);
        setImgServer(data.data.image);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo thêm hình ảnh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={handleFormSubmit}
            id="id-form"
            // method="post"
            // action="/api/v1/image-upload"
          >
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput3"
            >
              <Form.Control
                type="number"
                placeholder="Id người dùng tạo ảnh"
                autoFocus
                name="userCreateId"
                // value={dataForm?.titleImage}
              />
            </Form.Group>
            {/* <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput2"
            >
              <Form.Control
                type="text"
                placeholder="Thể loại ảnh"
                autoFocus
                name="categoryImage"
                value={dataForm?.categoryImage}
              />
            </Form.Group> */}

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"
                placeholder="Thể loại ảnh"
                autoFocus
                name="categoryImage"
                onChange={handleInputChange}
                value={dataForm?.categoryImage}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Control
                type="text"
                placeholder="Nhập tiêu đề ảnh"
                autoFocus
                name="titleImage"
                onChange={handleInputChange}
                value={dataForm?.titleImage}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                placeholder="Mô tả ảnh"
                rows={1}
                name="description"
                onChange={handleInputChange}
                value={dataForm?.description}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                type="text"
                placeholder="Nhập nguồn gốc ảnh"
                autoFocus
                name="sourceImage"
                onChange={handleInputChange}
                value={dataForm?.sourceImage}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                type="file"
                placeholder="Chọn file ảnh"
                autoFocus
                name="linkImage"
                onChange={handleImageChange}
              />
            </Form.Group>
            <div className="ctr-form">
              <Button
                variant="primary"
                type="submit"
                style={{ marginLeft: "130px" }}
              >
                Lưu và tạo mới
              </Button>
              <Button
                style={{ marginLeft: "30px" }}
                variant="secondary"
                onClick={handleClose}
              >
                Đóng
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalForm;
