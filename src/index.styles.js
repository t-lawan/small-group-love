import styled, { createGlobalStyle } from "styled-components"

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
    * {
  box-sizing: border-box;
}
html,
body {
  font-family: "Arial Narrow", Arial, sans-serif;;
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
  font-weight: lighter;
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
