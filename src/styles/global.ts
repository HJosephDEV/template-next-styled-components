import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: 400 16px 'Inter', sans-serif;
  }

  body {
    background: #1c1c1c;
    color: #fff;
    min-height: 100vh;
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  #__next {
    padding: 110px 10px 45px;
  }
`
