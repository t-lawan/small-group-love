import React from "react"
import { PageWrapper, PageTitle } from "../page-content/page-content";
import styled from "styled-components"
import Content from "../content/content"

const ProjectContentWrapper = styled.div`
  margin: 2rem 0;
`

const ProjectContentTitle = styled.p`
  text-align: center;
`
const ProjectContent = props => {
  let project = props.project

  return (
    <ProjectContentWrapper>
      {/* {page.title && !props.isHome ? <PageTitle> {page.title.toUpperCase()}</PageTitle> : null} */}
      {props.hideTitle ? null : <ProjectContentTitle> {project.participant}, {project.title} </ProjectContentTitle>}
      {project.content ? <Content info={project.content} /> : null}
    </ProjectContentWrapper>
  )
}

export default ProjectContent
