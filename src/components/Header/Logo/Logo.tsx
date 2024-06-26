import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

const logoStyle = css({
  fontSize: '30px',
});

const Logo = () => {
  return (
    <h1 css={logoStyle}>
      <Link to='/'>React</Link>
    </h1>
  );
};

export default Logo;
