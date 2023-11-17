import { createGlobalStyle } from "styled-components";
import NokoraRegular from "./Nokora-Regular.ttf";
import NokoraBold from "./Nokora-Bold.ttf";
import NanumGothic from "./NanumGothic-Regular.ttf";

const FontStyles = createGlobalStyle`
@font-face {
  font-family: 'Nokora';
  src: url(${NokoraRegular}) format('truetype');
  font-weight: 400;
}

@font-face {
    font-family: 'Nokora';
    src: url(${NokoraBold}) format('truetype');
    font-weight: 700;
}

@font-face {
    font-family: 'NanumGothic';
    src: url(${NanumGothic}) format('truetype');
    font-weight: 400;
  }
`;

export default FontStyles;
