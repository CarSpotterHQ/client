import React from 'react';
import { Route, Routes } from 'react-router';

// 임시로 생성
const HomePage = () => <h1>홈페이지</h1>;
const LoginPage = () => <h1>로그인 페이지</h1>;

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Router;
