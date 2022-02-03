import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import GlobalStyles from "./style/GlobalStyles";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes />
      <GlobalStyles />
    </BrowserRouter>
    </>
  );
}

export default App;
