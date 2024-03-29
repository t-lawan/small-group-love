import styled, { createGlobalStyle } from "styled-components"
import { Link } from "gatsby";
import GaramondBold from './assets/fonts/AppleGaramond-Bold.ttf'
import GaramondBoldItalic from './assets/fonts/AppleGaramond-BoldItalic.ttf'
import GaramondItalic from './assets/fonts/AppleGaramond-Italic.ttf'
import GaramondLight from './assets/fonts/AppleGaramond-Light.ttf'
import GaramondLightWoff from './assets/fonts/applegaramondlight.woff'
import GaramondLightWoff2 from './assets/fonts/applegaramondlight.woff2'
import GaramondLightItalic from './assets/fonts/AppleGaramond-LightItalic.ttf'
import Garamond from './assets/fonts/AppleGaramond.ttf'
export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "1500px"
}

export const GlobalStyle = createGlobalStyle`
  ${'' /* @font-face {
    font-family: "AppleGaramond";
    src: url(${Garamond}) format('ttf');
    font-weight: normal;
    font-style: normal;
    font-display: block;
  }
  @font-face {
    font-family: "AppleGaramond";
    src: url(${GaramondBold}) format('ttf');
    font-weight: bold;
    font-style: normal;
    font-display: block;

  }
  @font-face {
    font-family: "AppleGaramond";
    src: url(${GaramondBoldItalic}) format('ttf');
    font-weight: bold;
    font-style: italic;
    font-display: block;

  }

  @font-face {
    font-family: "AppleGaramond";
    src: url(${GaramondItalic}) format('ttf');
    font-weight: normal;
    font-style: italic;
    font-display: block;

  }

  @font-face {
    font-family: "AppleGaramond";
    src: url(${GaramondLightItalic}) format('ttf');
    font-weight: lighter;
    font-style: italic;
    font-display: block;

  } */}

  @font-face {
    font-family: "AppleGaramondLight";
    src: url(${GaramondLightWoff2}) format('woff2'), url(${GaramondLightWoff}) format('woff');
    ${'' /* font-weight: lighter;
    font-style: normal; */}
    font-display: block;

  }


    * {
  box-sizing: border-box;
}
html,
body {
  font-family: 'Arial Narrow', 'Arial', sans-serif;
  width: 100vw;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-style: normal; 
  background: white; 
  }
  h1,h2,h3,h4,h5,h6 {
    margin-left: 0;
    margin-right: 0;
    margin-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;
    padding-top: 0;
    color: black;
    }
  a {
    text-decoration: none;
    color: black;
  }
  h1 {
  margin-bottom: 1.45rem;
  font-size: 2.5rem;
  line-height: 1.1;
}
h2 {
  margin-bottom: 1.45rem;
  font-size: 1.6rem;
  line-height: 1.1;
}
h3 {
  margin-bottom: 1.45rem;
  font-size: 1.3rem;
  line-height: 1.1;
}
h4 {
  margin-bottom: 1.45rem;
  font-size: 1.2rem;
  line-height: 1.1;
}
h5 {
  margin-bottom: 1.45rem;
  font-size: 0.85028rem;
  line-height: 1.1;
}
h6 {
  margin-bottom: 1.45rem;
  font-size: 0.78405rem;
}
img {
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}
p, a{
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  font-size: 1.2rem;
  line-height: 1.15;
  font-style: normal;
  @media (max-width: ${size.mobileL}) {
    font-size: 0.7rem;
  }
}

a {
  margin: 0;
  margin-bottom: 0.25rem;
  @media (max-width: ${size.mobileL}) {
    margin-bottom: 0.25rem;
  }
}
li {
  list-style-type: lower-roman;
}
.active-link {
    font-style: italic;
    transform: rotate(1deg);

  }
`

export const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 1rem;
  height: 100vh;
  /* @media (max-width: ${size.tablet}) {
    grid-template-columns: 1fr;
  } */
  /* margin-top: 2rem; */
`

export const StyledLink = styled(Link)`
  /* transition: color 0.5s; */
  :hover {
    color: red;
  }
`