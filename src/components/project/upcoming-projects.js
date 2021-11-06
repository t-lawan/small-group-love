import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import moment from "moment"
import {
  ProjectsWrapper,
  ProjectContentWrapper,
  ProjectPageTitle
} from "./current-projects"
import ProjectList from "./project-list"
import { ProjectTypes } from "../../utility/helper"
import ProjectContent from "../project-content/project-content"
const UpcomingProjects = props => {
  // let projects = props.projects.filter(pr => {
  //   return moment().isBefore(pr.start_date, 'day');
  // })

  let projects = props.projects.filter(pr => {
    return pr.pages ?  pr.pages.includes(ProjectTypes.UPCOMING): false;
  })
  if (projects) {
    projects.sort((a, b) => {
      return moment(a).diff(moment(b))
    })
  }

  console.log('PROJECTS', projects);

  return (
    <ProjectsWrapper>
      <ProjectPageTitle> Forthcoming Projects</ProjectPageTitle>
      {projects && projects.length > 0 ? (
        <>
          <ProjectList projects={projects} withLinks={false} />
          <ProjectContentWrapper>
            <ProjectContent project={projects[0]} hideTitle={true} />
          </ProjectContentWrapper>
        </>
      ) : null}
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
