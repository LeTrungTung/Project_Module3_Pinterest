import axiosClient from "./axiosClient";

export class FollowAPI {
  static getAllFollow_User() {
    const url = "/api/v1/follow/get-follow-user";
    return axiosClient.get(url);
  }
}
