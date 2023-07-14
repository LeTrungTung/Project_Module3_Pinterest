import axiosClient from "./axiosClient";

export class ImageAPI {
  static getAllImages() {
    const url = "/api/v1/image/get-image";
    return axiosClient.get(url);
  }
  static getAllImages_Comments() {
    const url = "/api/v1/image/get-image-comment";
    return axiosClient.get(url);
  }
  static getAllImages_Love() {
    const url = "/api/v1/image/get-image-love";
    return axiosClient.get(url);
  }
  static getAllImages_Like() {
    const url = "/api/v1/image/get-image-like";
    return axiosClient.get(url);
  }
}
