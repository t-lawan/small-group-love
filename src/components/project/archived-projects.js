import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import moment from 'moment';

const ArchivedProjectWrapper = styled.div`

`
const ArchivedProjects = props => {
    let projects = props.projects.filter(pr => {
        return moment().isAfter(pr.end_date, 'day');
      })
    
      projects.sort((a, b) => {
          return moment(a).diff(moment(b));
      })

  return (
    <ArchivedProjectWrapper>
        <p> Archived Projects</p>
        {projects.map((project, index) => (
        <p key={index}> {project.title} </p>
      ))}
    </ArchivedProjectWrapper>
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