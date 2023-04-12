import { createGlobalStyle } from 'styled-components';

export const GlobalStyle =  createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, input, select, textarea, button {
    margin: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }

  * {
    box-sizing: border-box;
    &::-webkit-scrollbar {
      display: none;
      width: 6px;
      height: 6px;
    }
    &::-webkit-scrollbar-thumb {
      display: none;
      width: 2px;
      height: 2px;
      border-radius: 2px;
    }
  }
  
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html, body {
    font-size: 1rem;
    line-height: 1.5;
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, Montserrat, Roboto, Helvetica Neue, Arial;
    color: ${props => props.theme.text.primary};
    background: ${props => props.theme.background.primary};
  }

  #___gatsby {
    position: relative;
  }

  #___gatsby, #gatsby-focus-wrapper {
    width: 100%;
    min-height: 100%;
  }
  
  a {
    text-decoration: none;
    color: unset;
  }
  
  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input, select, textarea, button {
    border: none;
    font-family: inherit;
    color: ${props => props.theme.text.primary};
    background: ${props => props.theme.background.primary};

    &:focus {
      outline: 0;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active{
    //-webkit-box-shadow:0 0 0 30px var(--background-main) inset !important;
  }

  input:-webkit-autofill{
    //-webkit-text-fill-color: var(--text-main) !important;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'],
  input[type="number"]:hover,
  input[type="number"]:focus {
    appearance: none;
    -moz-appearance: textfield;
  }
`