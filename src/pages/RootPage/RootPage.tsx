import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';
import Header from '../../components/Header/Header';

const mainStyle = css({
  padding: '20px 50px',
});

const RootPage = () => {
  return (
    <>
      <Header />
      <main css={mainStyle}>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
