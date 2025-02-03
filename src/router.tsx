import React from 'react';
import { Route, Routes } from 'react-router';
import PenaltyPage from '@//pages/PenaltyPage';
import Layout from './layout/Layout';

const Router = () => {
  return (
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
  );
};

export default Router;
