import { useRecoilValue } from "recoil";
import { isLoggedInSelector } from "../recoil/loginState";
import { Navigate, Outlet } from "react-router-dom";

const NoLoginRouter = () => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);

  return (
    <>
      {
        isLoggedIn ? (
          <Navigate to={'/'} replace />
        ) : (
          <Outlet />
        )
      }    
    </>
  );
};

export default NoLoginRouter;