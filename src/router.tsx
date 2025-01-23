import React from 'react';
import { Route, Routes } from 'react-router';

const Router = () => {
  return (
    <Routes>
      {/* 영률님 파트 */}
      <Route path="/" element={<div>영률님 파트</div>} />

      {/* 중원 파트 */}
      <Route path="/jungwon" element={<div>중원 파트</div>} />

      {/* 예린님 파트 */}
      <Route path="/yerin" element={<div>예린님 파트</div>} />

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default Router;
