import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// 로그인 상태를 나타내는 변수
const isLogin = true;

// 임시로 생성
const HomePage = () => <h1>홈페이지</h1>;
const LoginPage = () => <h1>로그인 페이지</h1>;
const ProtectedPage = () => <h1>로그인 후 접근 가능한 페이지</h1>;

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/protected"
          element={isLogin ? <ProtectedPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
