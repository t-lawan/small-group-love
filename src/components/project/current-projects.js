import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import ProjectList from "./project-list";

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CurrentProjects = props => {
  let projects = props.projects.filter(pr => {
    return pr.isCurrent
  })
  return (
    <ProjectsWrapper>
      <p> Currently Showing</p>
      <ProjectList projects={projects} />
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
