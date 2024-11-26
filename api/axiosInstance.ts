import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const axiosInstance: AxiosInstance = axios.create({
  // baseURL:
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // token 확인 로직 필요
    if (true) {
      // config.headers.Authorization = `Bearer ${token}`
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      // 토큰 만료 여부 확인 후 재발급 로직 필요

      if (!error.config || !error.config.headers) {
        return Promise.reject(error);
      }

      error.config.headers.set("Authorization", `Bearer NEW_TOKEN`);

      try {
        const response = await axios.request(error.config);
        return response;
      } catch (retryError) {
        return Promise.reject(retryError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
