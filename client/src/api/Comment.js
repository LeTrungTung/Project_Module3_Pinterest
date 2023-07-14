import axiosClient from "./axiosClient";

export class CommentAPI {
  static getLoveComments() {
    const url = "api/v1/comment/get-love-comment";
    return axiosClient.get(url);
  }
  static getLikeComments() {
    const url = "api/v1/comment/get-like-comment";
    return axiosClient.get(url);
  }
  static getAllComments() {
    const url = "api/v1/comment/get-all-comment";
    return axiosClient.get(url);
  }
}
