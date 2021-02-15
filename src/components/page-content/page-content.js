import React from "react"
import styled from "styled-components"
import { Convert } from "../../utility/convert"
import Content from "../content/content"
import PageSection from "../page-section/page-section";

export const PageWrapper = styled.div``
export const PageTitle = styled.p``
const PageContent = props => {
  let page = props.page
  console.log('{AGE', page.content)
  return (
    <PageWrapper>
      {/* {page.title && !props.isHome ? <PageTitle> {page.title.toUpperCase()}</PageTitle> : null} */}
      {page.content ? <Content info={page.content} /> : null}
      <PageSection type={page.type} />
    </PageWrapper>
  )
}

export default PageContent
