import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedLayout from "./../layout/ProtectedLayout";

// 임시로 생성
const HomePage = () => <h1>홈페이지</h1>;
const LoginPage = () => <h1>로그인 페이지</h1>;
const ProtectedPage = () => <h1>로그인 후 접근 가능한 페이지</h1>;

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* public route */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* protected route */}
        <Route element={<ProtectedLayout />}>
          <Route path="/protected" element={<ProtectedPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
