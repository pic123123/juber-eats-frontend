import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0; padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.color.text};
    font-size: 14px;
    font-family: 'Noto Sans KR', sans-serif;
  }
  
  a {
    text-decoration: none;
  }

  button,select {
    &:not(:disabled){
      cursor: pointer;
    }
  }

  /* datepicker 커스텀 스타일 */
  .react-datepicker-popper { z-index: 9999 !important;}

`;

export default GlobalStyle;
