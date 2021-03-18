import React from "react"
import styled from "styled-components"
import { Convert } from "../../utility/convert"
import Content from "../content/content"
import PageSection from "../page-section/page-section"
import Img from "gatsby-image/withIEPolyfill"
import { size } from "../../index.styles";

const BackgroundImageWrapper = styled.div`
  position: fixed;
  width: ${props => (props.isLandscape ? "60%" : "100%")};
  height: ${props => (props.isLandscape ? "100%" : "80%")};
  z-index: 0;
  @media (max-width: ${size.tablet}) {
    width: ${props => (props.isLandscape ? "60%" : "80%")};
    margin: ${props => (!props.isLandscape ? "0 10%" : "0")};
  }
`
const BackgroundImage = styled(Img)`
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
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
  margin: 3rem 0;
  width: ${props => (props.isFixed ? "60%" : "100%")};
  @media (max-width: ${size.tablet}) {
    padding: 0.5rem;
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
            objectFit={isLandscape ? "cover" : "contain"}
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
        {page.content ? <Content info={page.content} /> : null}

        </PageSectionWrapper>
        <PageSection type={page.type} />
      </ContentWrapper>
    </PageWrapper>
  )
}

export default PageContent
