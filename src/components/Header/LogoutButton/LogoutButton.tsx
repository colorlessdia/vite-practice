import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { sessionIdState } from '../../../libs/recoil/loginState';

const LogoutButton = () => {
  const navigate = useNavigate();
  const setSessionId = useSetRecoilState(sessionIdState);

  // 로그아웃 핸들러
  const handleClickLogout = () => {
    setSessionId(undefined);
    navigate('/login', { replace: true });
  };

  return (
    <button type='button' onClick={handleClickLogout}>
      로그아웃
    </button>
  );
};

export default LogoutButton;
