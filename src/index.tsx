import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {RecoilRoot} from "recoil";
import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";


const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  @@ -55,27 +54,27 @@
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: 300;
    font-family: 'Source Sans Pro', sans-serif;
    color:${(props) => props.theme.white.darker};
    line-height: 1.2;
    background-color: black;
    height: 120vh;
  }
  a {
    text-decoration:none;
    color:inherit;
  }
`;

const client = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />  
        <App />
      </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

