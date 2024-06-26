import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { sessionIdState } from "../libs/recoil/loginState";

type UseLoginRequestProps = {
  userId: string;
  userPwd: string;
};

const useLoginRequest = ({ userId, userPwd }: UseLoginRequestProps) => {
  const navigate = useNavigate();
  const setSessionId = useSetRecoilState(sessionIdState);

  /** 로그인 핸들러 */
  const handleClickLogin = async () => {
    const tempId = 'a';
    const tempPwd = 'a';

    try {
      const response = await new Promise<string>((res) => {
        if (userId === tempId && userPwd === tempPwd) {
          // 서버 유저정보 일치 상황 가정
          res(JSON.stringify({
            message: 'success',
            sessionId: 'abcdefgh'
          }));
        } else {
          // 서버 유저정보 불일치 상황 가정
          res(JSON.stringify({
            message: 'failed',
            sessionId: undefined
          }));
        }
      });

      const loginState = JSON.parse(response);

      if (loginState.message === 'success') {
        // 로그인 성공
        setSessionId(loginState.sessionId);
        navigate('/', { replace: true });
      } else {
        // 로그인 실패
      }
    } catch (err) {
      console.log(`${err} 의 이유로 로그인 실패`);
    }
  };

  return {
    handleClickLogin
  };
};

export default useLoginRequest;