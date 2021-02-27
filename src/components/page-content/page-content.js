import React from "react"
import styled from "styled-components"
import { Convert } from "../../utility/convert"
import Content from "../content/content"
import PageSection from "../page-section/page-section";
import Img from "gatsby-image"

const BackgroundImageWrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 0;
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

  /* display: flex;
  flex-direction: column;
  align-items: center; */
`

export const PageWrapper = styled.div`
  text-align: center; 
`
export const PageTitle = styled.p``

export 
const PageContent = props => {
  let page = props.page
  console.log('{AGE', page)
  return (
    <PageWrapper>
    {page.backgroundImage ? (
      <BackgroundImageWrapper>
      <BackgroundImage fluid={page.backgroundImage.fluid} />
    </BackgroundImageWrapper>
    ) : null}

    <ContentWrapper isFixed={page.backgroundImage}>
      {page.title && !props.isHome ? <PageTitle> {page.title.toUpperCase()}</PageTitle> : null}
      {page.content ? <Content info={page.content} /> : null}
      <PageSection type={page.type} />
    </ContentWrapper>
 

    </PageWrapper>
  )
}

export default PageContent
