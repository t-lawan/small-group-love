import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import moment from 'moment';
import { ProjectsWrapper, ProjectContentWrapper, ProjectPageTitle } from "./current-projects";
import ProjectList from "./project-list";
import { ProjectTypes } from "../../utility/helper";
import ProjectContent from "../project-content/project-content";
const UpcomingProjects = props => {
  // let projects = props.projects.filter(pr => {
  //   return moment().isBefore(pr.start_date, 'day');
  // })

  let projects = props.projects.filter(pr => {
    return pr.page === ProjectTypes.UPCOMING
  })

  projects.sort((a, b) => {
      return moment(a).diff(moment(b));
  })

  return (
    <ProjectsWrapper>
      <ProjectPageTitle> Forthcoming Projects</ProjectPageTitle>
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
)(UpcomingProjects)
