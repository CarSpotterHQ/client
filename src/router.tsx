import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PenaltyPage from '@//pages/PenaltyPage';
import Layout from './layout/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* 영률님 파트 */}
          <Route path="/" element={<div>영률님 파트</div>} />

          {/* 중원 파트 */}
          <Route path="/penalty" element={<PenaltyPage />} />

          {/* 예린님 파트 */}
          <Route path="/yerin" element={<div>예린님 파트</div>} />

          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
