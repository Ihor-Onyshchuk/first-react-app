import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "598509f0-de1e-4a47-98db-36f21f6db0e1"
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => response.data);
  },

  follow(userId) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  },

  getProfile(userId) {
    return instance.get(`profile/${userId}`);
  }
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  }
};

export default usersAPI;
