import { useState } from 'react';

const useLoginInput = () => {
  const [userId, setUserId] = useState<string>('');
  const [userPwd, setUserPwd] = useState<string>('');

  /** 아이디 입력 변경 감지 */
  const handleChangeUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  /** 비밀번호 입력 변경 감지 */
  const handleChangeUserPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPwd(e.target.value);
  };

  return {
    userId,
    userPwd,
    handleChangeUserId,
    handleChangeUserPwd,
  };
};

export default useLoginInput;
