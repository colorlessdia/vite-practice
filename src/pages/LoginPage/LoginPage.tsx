import useLoginInput from '../../hooks/useLoginInput';
import useLoginRequest from '../../hooks/useLoginRequest';

const LoginPage = () => {
  /** 로그인 인풋 변경 감지 */
  const { userId, userPwd, handleChangeUserId, handleChangeUserPwd } =
    useLoginInput();

  /** 로그인 버튼 핸들러 */
  const { handleClickLogin } = useLoginRequest({ userId, userPwd });

  return (
    <form>
      <ul>
        {/* 아이디 입력란 */}
        <li>
          <label htmlFor='userId'>아이디</label>
          <input
            id='userId'
            type='text'
            value={userId}
            onChange={handleChangeUserId}
            placeholder='a'
          />
        </li>
        {/* 비밀번호 입력란 */}
        <li>
          <label htmlFor='userPwd'>비밀번호</label>
          <input
            id='userPwd'
            type='password'
            value={userPwd}
            onChange={handleChangeUserPwd}
            placeholder='a'
          />
        </li>
      </ul>
      {/* 로그인 버튼 */}
      <button type='button' onClick={handleClickLogin}>
        로그인
      </button>
    </form>
  );
};

export default LoginPage;
