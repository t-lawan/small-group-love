import React from "react"
import styled from "styled-components"
import Content from "../content/content"
import { PageWrapper } from "../page-content/page-content";


const ProjectContent = props => {
  let project = props.project

  return (
    <PageWrapper>
      {/* {page.title && !props.isHome ? <PageTitle> {page.title.toUpperCase()}</PageTitle> : null} */}
      {project.content ? <Content info={project.content} /> : null}
    </PageWrapper>
  )
}

export default ProjectContent
