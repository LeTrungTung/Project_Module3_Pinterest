import axiosClient from "./axiosClient";

export class UserAPI {
  // API đăng ký
  static register(param) {
    const url = "/api/v1/user/register";
    return axiosClient.post(url, param);
  }
  //   API đăng nhập
  static login(param) {
    const url = "/api/v1/user/login";
    return axiosClient.post(url, param);
  }

  static getUsers() {
    const url = "api/v1/user/get-user";
    return axiosClient.get(url);
  }
}
