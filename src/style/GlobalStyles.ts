import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
body {
  background-image: radial-gradient(circle, #1e3a8a, #193c9a, #133daa, #0f3eb9, #0e3fc9);
  color: #fff;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font-family: 'Poppins', serif;
  font-size: 16px;
}
`;