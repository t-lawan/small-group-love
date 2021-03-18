import React from "react"
import { PageWrapper, PageTitle } from "../page-content/page-content"
import styled from "styled-components"
import Content from "../content/content"
import { ProjectContentWrapper } from "../project/current-projects"

const ProjectContentTitle = styled.p`
  text-align: center;
  /* width: 60%; */
`

const ContentWrapper = styled.div`
  padding-top: 3.5rem;
`
const ProjectContent = props => {
  let project = props.project

  return (
    <ProjectContentWrapper>
      {/* {page.title && !props.isHome ? <PageTitle> {page.title.toUpperCase()}</PageTitle> : null} */}
      {props.hideTitle ? null : (
        <ProjectContentTitle>
          {" "}
          {project.participant}, {project.title}{" "}
        </ProjectContentTitle>
      )}
      {project.content ? (
        <ContentWrapper>
          <Content info={project.content} />
        </ContentWrapper>
      ) : null}
      
    </ProjectContentWrapper>
  )
}

export default ProjectContent
