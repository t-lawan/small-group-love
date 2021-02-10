import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import moment from 'moment';
const UpcomingProjectWrapper = styled.div``
const UpcomingProjects = props => {
  let projects = props.projects.filter(pr => {
    return moment().isBefore(pr.start_date, 'day');
  })

  projects.sort((a, b) => {
      return moment(a).diff(moment(b));
  })

  return (
    <UpcomingProjectWrapper>
      <p> Upcoming Projects</p>
      {projects.map((project, index) => (
        <p key={index}> {project.title} </p>
      ))}
    </UpcomingProjectWrapper>
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
