import { useRecoilValue } from "recoil";
import { isLoggedInSelector } from "../../../libs/recoil/loginState";
import GNBItem from "./GNBItem/GNBItem";

const GNB = () => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);
  /** GNB 링크 모음 */
  const publicLinkList = [
    { href: '/', name: '메인' },
  ];
  const protectedLinkList = [
    { href: '/mypage', name: '마이페이지', protected: true },
    { href: '/login', name: '로그인', protected: false },
  ];

  return (
    <nav>
      <ul>
        {
          publicLinkList.map(link => (
            <GNBItem key={link.href} link={link} />
          ))
        }
        {
          protectedLinkList.map(link => {
            if (isLoggedIn && link.protected) {
              // 로그인 유저 전용
              return <GNBItem key={link.href} link={link} />
            } else if (!isLoggedIn && !link.protected) {
              // 비로그인 유저 전용
              return <GNBItem key={link.href} link={link} />
            }
          })
        }
      </ul>
    </nav>
  );
};

export default GNB;