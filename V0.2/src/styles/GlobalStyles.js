import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:wght@300&family=Sacramento&display=swap');
    *{
        box-sizing: border-box;
    }
    li {
        list-style: none;
    }
    html {
        font-size: 10px;
        font-family: 'Roboto', sans-serif;
    }
    #root{
        width: 100vw;
        height: 100vh;
        color: #33322E;
    }
    h1 {
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyles;