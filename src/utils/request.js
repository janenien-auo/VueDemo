import axios from "axios";
import { Message } from "element-ui";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 10000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    // 用於axios發送request的前置準備
    // 可以把通用的header設定在這裡
    return config;
  },
  (error) => {
    // 發生Error的情境要做的事情
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    //執行成功要執行的function
    const res = response.data;
    return res;
  },
  (error) => {
    //  發生錯誤要執行的function
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
