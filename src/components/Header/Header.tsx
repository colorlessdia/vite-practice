import Logo from "./Logo/Logo";
import GNB from './GNB/GNB';
import LogoutButton from './LogoutButton/LogoutButton';
import { useRecoilValue } from "recoil";
import { isLoggedInSelector } from "../../libs/recoil/loginState";

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);

  return (
    <header>
      <Logo />
      <GNB />
      {
        isLoggedIn && <LogoutButton />
      }
    </header>
  );
};

export default Header;