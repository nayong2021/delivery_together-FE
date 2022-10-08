import axios from "axios";

const createInstance = () => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_API_HOST,
    timeout: 5000,
  });

  instance.interceptors.request.use(
    function (config) {
      const accessToken = sessionStorage.getItem("accessToken");
      const refreshToken = sessionStorage.getItem("refreshToken");
      if (accessToken != null) config.headers["Authorization"] = accessToken;
      if (refreshToken != null) config.headers["refreshToken"] = refreshToken;
      return config;
    },
    function (error) {
      // 요청 에러 직전 호출됩니다.
      return Promise.reject(error);
    }
  );
  return instance;
};

const instance = createInstance();

export default instance;
