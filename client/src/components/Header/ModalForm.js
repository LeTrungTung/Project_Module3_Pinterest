import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

import React, { useState } from "react";
import "./ModalForm.css";
// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytes,
// } from "firebase/storage";
// import { storage } from "../../../firebase";
// import InfoImageAPI from "../../../api/InfoImage";
// import { useDispatch } from "react-redux";
// import { handleAddImageAPI } from "../../../redux/reducer/InfoImageSilce";

function ModalForm(props) {
  const [dataForm, setDataForm] = useState({
    title: "",
    description: "",
    author: "",
    urlImage: null,
  });

  // const dispatch = useDispatch();
  const handleClose = () => props.setShow(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // InfoImageAPI.addImage(dataForm)
    //   .then((response) => {
    //     console.log("Image sent successfully:", response.data);
    //     // update lại dữ liệu từ DB về Redux
    //     handleClose(); // Đóng ModalForm
    //   })
    //   .catch((error) => {
    //     // Xử lý khi gửi bình luận gặp lỗi
    //     console.error("Error sending comment:", error);
    //   });
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDataForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImageChange = (event) => {
    // const file = event.target.files[0];
    // if (!file) return;
    // const storages = storage;
    // const imgRefs = ref(storages, `images/${file.name}`);
    // uploadBytes(imgRefs, file).then((snapshot) => {
    //   getDownloadURL(snapshot.ref).then((url) => {
    //     console.log("day la anh phai khong", url);
    //     setDataForm((prevData) => ({
    //       ...prevData,
    //       urlImage: url,
    //     }));
    //   });
    // });
  };

  return (
    <>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo thêm hình ảnh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit} id="id-form">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              {/* <Form.Label>Tiêu đề ảnh</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Nhập tiêu đề ảnh"
                autoFocus
                name="title"
                onChange={handleInputChange}
                value={dataForm.title}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Mô tả ảnh</Form.Label> */}
              <Form.Control
                as="textarea"
                placeholder="Mô tả ảnh"
                rows={2}
                name="description"
                onChange={handleInputChange}
                value={dataForm.description}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Nguồn gốc ảnh</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Nhập nguồn gốc ảnh"
                autoFocus
                name="author"
                onChange={handleInputChange}
                value={dataForm.author}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              {/* <Form.Label>Chọn file ảnh</Form.Label> */}
              <Form.Control
                type="file"
                placeholder="Chọn file ảnh"
                autoFocus
                name="urlImage"
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
