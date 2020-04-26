import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  * {
    font-size: 14px;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @font-face {
    font-family: 'Quicksand-Bold';
    src: url('/static/fonts/Quicksand/Quicksand-Bold.ttf');
  }
  
  @font-face {
    font-family: 'Quicksand-SemiBold';
    src: url('/static/fonts/Quicksand/Quicksand-SemiBold.ttf');
  }
  
  @font-face {
    font-family: 'Quicksand-Regular';
    src: url('/static/fonts/Quicksand/Quicksand-Regular.ttf');
  }
  
  @font-face {
    font-family: 'Quicksand-Light';
    src: url('/static/fonts/Quicksand/Quicksand-Light.ttf');
  }
  
  @font-face {
    font-family: 'Quicksand-Medium';
    src: url('/static/fonts/Quicksand/Quicksand-Medium.ttf');
  }
`;

export default GlobalStyle
