import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
    }
    li{
        list-style:none;
    }
    button {
        all:unset;
        width: 30px;
        border: 1px solid aqua;
        text-align: center;
        font-size: 12px;
        border-radius: 10px;
        margin-left: 5px;
    }
    body{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

export default GlobalStyle;