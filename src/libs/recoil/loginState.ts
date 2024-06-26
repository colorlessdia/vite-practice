import { atom, selector } from "recoil";
import type { sessionId } from "../../types/loginType";

/** 세션 아이디 상태 */
export const sessionIdState = atom<sessionId>({
  key: 'sessionIdState',
  default: undefined,
});

/** 세션아이디 유무로 로그인 여부 판별 */
export const isLoggedInSelector = selector({
  key: 'isLoggedInSelector',
  get: ({ get }) => {
    const sessionId = get(sessionIdState);

    // 세션아이디가 없는경우: 비로그인 상태
    if (sessionId === undefined) {
      return false;
    }

    // 세션아이디가 있는경우: 로그인 상태
    return true;
  },
});