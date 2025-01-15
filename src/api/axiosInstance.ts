import axios, { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  // baseURL:
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config;
  },
  error => {
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
      // 로그아웃 처리나 리다이렉트 로직 추가 필요
      if (!error.config || !error.config.headers) {
        return Promise.reject(error);
      }

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
