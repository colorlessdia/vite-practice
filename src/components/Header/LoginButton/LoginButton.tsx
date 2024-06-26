import { useNavigate } from "react-router-dom";

const LogginButton = () => {
  const navigate = useNavigate();

  // 로그인 페이지로 이동
  const handleClickNavigateLogin = () => {
    navigate('/login');
  };

  return (
    <button type="button" onClick={handleClickNavigateLogin}>
      로그인
    </button>
  );
};

export default LogginButton;