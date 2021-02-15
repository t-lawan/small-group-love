import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import moment from 'moment';
import { ProjectsWrapper } from "./current-projects";
import ProjectList from "./project-list";
const UpcomingProjects = props => {
  let projects = props.projects.filter(pr => {
    return moment().isBefore(pr.start_date, 'day');
  })

  projects.sort((a, b) => {
      return moment(a).diff(moment(b));
  })

  return (
    <ProjectsWrapper>
      <p> Forthcoming Projects</p>
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
)(UpcomingProjects)
