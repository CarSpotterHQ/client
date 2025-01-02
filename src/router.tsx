import { Link, createMemoryRouter } from 'react-router-dom';

const HomePage = () => (
  <div>
    <h1>홈페이지</h1>
    <Link to="/login">로그인 페이지로 이동</Link>
  </div>
);
const LoginPage = () => <h1>로그인 페이지</h1>;

const router = createMemoryRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
