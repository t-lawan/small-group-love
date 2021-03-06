import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import ProjectList from "./project-list";
import { ProjectTypes } from "../../utility/helper";
import ProjectContent from "../project-content/project-content";

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`

export const ProjectContentWrapper = styled.div`
  margin: 2rem 0;
`

export const ProjectPageTitle = styled.p`
  width: 60%;
`
const CurrentProjects = props => {
  // let projects = props.projects.filter(pr => {
  //   return pr.isCurrent
  // })

  let projects = props.projects.filter(pr => {
    return pr.page === ProjectTypes.CURRENT
  })
  return (
    <ProjectsWrapper>
      <ProjectPageTitle> Currently Showing</ProjectPageTitle>
      <ProjectList projects={projects} />
      <ProjectContentWrapper>
        <ProjectContent project={projects[0]} hideTitle={true} />
      </ProjectContentWrapper>
    </ProjectsWrapper>
  )
}

const mapStateToProps = state => {
  return {
    projects: state.projects
  }
}

export default connect(
  mapStateToProps,
  null
)(CurrentProjects)
