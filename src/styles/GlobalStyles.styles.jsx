import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import SimKyungha from "../fonts/SimKyungha.ttf";

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    box-sizing:border-box;
  }

ul,li{
  list-style: none;
}
a{
  text-decoration: none;
}
html{
  font-size:62.5%;
}
body{
  font-size:1.6rem;
  font-family:"SimKyungha"
}

:root{
  --dark-color:#000;
  --light-color:#fff;
  --accent-color:#d623a0;
  --border-color : #ccc;
}

@font-face {
  font-family: "SimKyungha";
  src: url(${SimKyungha}) format("truetype");
  /* src: url("/fonts/SimKyungha.ttf") format("truetype"); */
}
`;

export default GlobalStyles;
