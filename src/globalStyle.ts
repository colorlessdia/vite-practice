import { css } from '@emotion/react';

const globalStyle = css({
  '*, *::before, *::after': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  'ul li': {
    listStyle: 'none',
  },
  'a': {
    color: 'inherit',
    textDecoration: 'none',
  },
  'button': {
    fontSize: '16px',
    border: 0,
    background: '#fff',
    cursor: 'pointer',
  }
});

export default globalStyle;
