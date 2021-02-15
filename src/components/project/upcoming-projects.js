import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import moment from 'moment';
import { ProjectsWrapper } from "./current-projects";
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
      {projects.map((project, index) => (
        <p key={index}> {project.title} </p>
      ))}
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
