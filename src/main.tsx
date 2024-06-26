import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { Global, css } from "@emotion/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Global styles={css({
      '*, *::before, *::after': {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
      },
      'ul li': {
        listStyle: "none",
      },
      'a': {
        color: 'inherit',
        textDecoration: 'none',
      }
    })} />
    <App />
  </React.StrictMode>,
);
