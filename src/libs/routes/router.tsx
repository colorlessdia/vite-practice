import { createHashRouter } from "react-router-dom";
// pages
import RootPage from "../../pages/RootPage/RootPage";
import MainPage from "../../pages/MainPage/MainPage";

const router = createHashRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        index: true,
        element: <MainPage />
      }
    ]
  }
]);

export default router;