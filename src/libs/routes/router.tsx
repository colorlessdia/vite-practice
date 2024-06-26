import { createHashRouter } from 'react-router-dom';
// pages
import RootPage from '../../pages/RootPage/RootPage';
import MainPage from '../../pages/MainPage/MainPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import MyPage from '../../pages/MyPage/MyPage';
import ProtectedRouter from './ProtectedRouter';
import NoLoginRouter from './NoLoginRouter';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';

const router = createHashRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        // 비로그인 유저 전용
        element: <NoLoginRouter />,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
        ],
      },
      {
        // 로그인 유저 전용
        element: <ProtectedRouter />,
        children: [
          {
            path: 'mypage',
            element: <MyPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
