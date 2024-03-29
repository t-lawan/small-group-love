import React from "react"
import styled from "styled-components"
import { Convert } from "../../utility/convert"
import Content from "../content/content"
import PageSection from "../page-section/page-section"
import Img from "gatsby-image/withIEPolyfill"
import { size } from "../../index.styles";

const BackgroundImageWrapper = styled.div`
  position: fixed;
  /* width: ${props => (props.isLandscape ? "58%" : "100%")};
  height: ${props => (props.isLandscape ? "100%" : "80%")}; */
  z-index: 0;
  width: 100%;
  height: 100%;
  /* @media (max-width: ${size.tablet}) {
    width: ${props => (props.isLandscape ? "58%" : "80%")};
    margin: ${props => (!props.isLandscape ? "0 10%" : "0")};
  } */
`
const BackgroundImage = styled(Img)`
  /* position: fixed;
  overflow: hidden; */
  width: ${props => (props.isLandscape ? "40vw" : "100%")};
  left: ${props => (props.isLandscape ? "30vw" : "0")};
  /* height: 100%; */
  /* width: ${props => (props.isLandscape ? "58%" : "100%")}; */
  height: ${props => (props.isLandscape ? "auto" : "79%")};
  z-index: 0;
  @media (max-width: ${size.tablet}) {
    width: ${props => (props.isLandscape ? "60vw" : "100%")};
  }
  /* @media (max-width: ${size.tablet}) {
    width: ${props => (props.isLandscape ? "58%" : "80%")};
    margin: ${props => (!props.isLandscape ? "0 10%" : "0")};
  } */
`

const ContentWrapper = styled.div`
  z-index: 100;
  background: transparent;
  position: ${props => (props.isFixed ? "fixed" : "inherit")};
  color: ${props => (props.isFixed ? "white !important" : "inherit")};
  padding: 1rem;
  text-align: center;
  /* width: 100%; */
  height: 100%;
  top: 0;
  a {
    color: ${props => (props.isFixed ? "white !important" : "inherit")};
  }
  margin: 2rem 0;
  width: ${props => (props.isFixed ? "40vw" : "100%")};
  @media (max-width: ${size.tablet}) {
    padding: 0.5rem;
    margin:0;
  }
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`

export const PageWrapper = styled.div`
  text-align: center;
      display: flex;
    flex-direction: column;
    align-items: center;
`

export const PageSectionWrapper = styled.div`
  /* width: 60%; */

`
export const PageTitle = styled.p`
  width: ${props => (props.isFixed ? "60%" : "100%")};
`

export const PageContent = props => {
  let page = props.page
  let isLandscape = true
  if (page.backgroundImage) {
    isLandscape = page.backgroundImage.fluid.aspectRatio < 1
  }

  return (
    <PageWrapper>
      {page.backgroundImage ? (
        <BackgroundImageWrapper isLandscape={isLandscape}>
          <BackgroundImage
            objectFit={isLandscape ? "contain" : "contain"}
            fluid={page.backgroundImage.fluid}
            isLandscape={isLandscape}
          />
        </BackgroundImageWrapper>
      ) : null}

      <ContentWrapper isFixed={!!page.backgroundImage}>
        {/* {page.title && !props.isHome ? (
          <PageTitle isFixed={!(!!page.backgroundImage)}> {page.title.toUpperCase()}</PageTitle>
        ) : null} */}
        <PageSectionWrapper>
        {page.content ? <Content page={page} info={page.content} /> : null}

        </PageSectionWrapper>
        <PageSection type={page.type} />
      </ContentWrapper>
    </PageWrapper>
  )
}

export default PageContent
