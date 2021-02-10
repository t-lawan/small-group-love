import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

const CurrentProjectsWrapper = styled.div``
const CurrentProjects = props => {
  let projects = props.projects.filter(pr => {
    return pr.isCurrent
  })
  return (
    <CurrentProjectsWrapper>
      <p> Current Projects</p>
      {projects.map((project, index) => (
        <p key={index}> {project.title} </p>
      ))}
    </CurrentProjectsWrapper>
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
