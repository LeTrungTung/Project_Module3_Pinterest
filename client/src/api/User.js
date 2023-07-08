import axiosClient from "./axiosClient";

export class UserAPI {
  // API đăng ký
  static register(param) {
    const url = "/register";
    return axiosClient.post(url, param);
  }
  //   API đăng nhập
  static login(param) {
    const url = "/login";
    return axiosClient.post(url, param);
  }

  static getUsers() {
    const url = "/users";
    return axiosClient.get(url);
  }
}
