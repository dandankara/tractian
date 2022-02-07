import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}
body {
  background: rgb(69,111,176);
background: linear-gradient(90deg, rgba(69,111,176,1) 15%, rgba(60,96,201,1) 35%, rgba(43,81,189,1) 61%, rgba(30,72,194,1) 90%);
  color: #fff;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font-family: 'Poppins', serif;
  font-size: 16px;
}
`;