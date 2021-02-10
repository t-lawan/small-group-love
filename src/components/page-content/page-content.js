import React from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { richTextOptions, GenerateContentSection } from "../../utility/richtext"
import { size } from "../../index.styles"
import Img from "gatsby-image"
import { Convert } from "../../utility/convert";

export const PageWrapper = styled.div``
export const PageTitle = styled.p``
const PageContent = props => {
  let page = Convert.toPageModel(props.pageContent);

  return (
    <PageWrapper>
      {page.title ? <PageTitle>  {page.title.toUpperCase()}</PageTitle> : null}
      {page.content
        ? page.content.map((con, index) => GenerateContentSection(con, index))
        : null}
    </PageWrapper>
  )
}

export default PageContent
