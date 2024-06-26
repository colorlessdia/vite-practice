import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

const notFoundStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
});

const textWrapStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

const navigateButtonStyle = css({
  padding: '10px 0',
  border: '2px solid #000',
  borderRadius: '4px',
});

const NotFoundPage = () => {
  const navigate = useNavigate();

  // 메인 화면으로 이동
  const handleClickNavigateMain = () => {
    navigate('/', { replace: true });
  };

  return (
    <main css={notFoundStyle}>
      <div css={textWrapStyle}>
        <h2>페이지를 찾을 수 없습니다</h2>
        <button type="button" onClick={handleClickNavigateMain} css={navigateButtonStyle}>
          메인 화면으로 바로가기
        </button>
      </div>
    </main>
  );
};

export default NotFoundPage;