import { createGlobalStyle, css } from 'styled-components';
import { color, typography } from './styles';

export const fontUrl = 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900';



export const bodyStyles = css`
  font-family: ${typography.type.primary};
  font-size: ${typography.size.s3}px;
  color: ${color.darkest};

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -webkit-overflow-scrolling: touch;

  * {
    box-sizing: border-box;
  }
`;

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,700,800,900');

  html {
    font-size: 62.5%;
  }

  body {
    ${bodyStyles}

    margin: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }

  :root {
    --sys-wid: 900px;

    // 主色系参数
    --clr-main: #336699;
    --clr-sub: #cde5e5;
    --clr-grdf: #518cfc;
    --clr-grdt: #4db0d4;
    --clr-sel: #ff6600;
  }

`;