import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import moment from "moment"
import { ProjectsWrapper } from "./current-projects"
import ProjectList from "./project-list"
import { ProjectTypes } from "../../utility/helper";
import { size } from "../../index.styles";
const ArchivedProjectsWrapper = styled(ProjectsWrapper)`
  align-items: center;
  width: 60%;
  @media (max-width: ${size.tablet}) {
    width: 100%;
  }
`
const ArchivedProjects = props => {
  // let projects = props.projects.filter(pr => {
  //   return moment().isAfter(pr.end_date, "day")
  // })
  let projects = props.projects.filter(pr => {
    return pr.page === ProjectTypes.ARCHIVE
  })

  console.log("PROJECTS", projects)

  projects.sort((a, b) => {
    return moment(a.end_date).diff(moment(b.end_date))
  })

  return (
    <ArchivedProjectsWrapper>
      <p> * </p>
      <ProjectList showDate={true} projects={projects} />
    </ArchivedProjectsWrapper>
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
)(ArchivedProjects)
