import { css } from '@emotion/react';
import { useRecoilValue } from 'recoil';
import { isLoggedInSelector } from '../../libs/recoil/loginState';
import Logo from './Logo/Logo';
import GNB from './GNB/GNB';
import LogoutButton from './LogoutButton/LogoutButton';
import LogginButton from './LoginButton/LoginButton';

const headerStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 50px',
  height: '70px',
  boxShadow: '0 1px 3px rgba(0,0,0,.15)',
});

const headerRightGroupStyle = css({
  display: 'flex',
  gap: '20px'
});

const Header = () => {
  const isLoggedIn = useRecoilValue(isLoggedInSelector);

  return (
    <header css={headerStyle}>
      <Logo />
      <div css={headerRightGroupStyle}>
        <GNB />
        {
          isLoggedIn ? (
            <LogoutButton />
          ) : (
            <LogginButton />
          )
        }
      </div>
    </header>
  );
};

export default Header;
