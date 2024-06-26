import { Navigate, Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoggedInSelector } from '../recoil/loginState';

const ProtectedRouter = () => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);

  return <>{isLoggedIn ? <Outlet /> : <Navigate to={'/login'} replace />}</>;
};

export default ProtectedRouter;
