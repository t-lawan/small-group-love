import React from "react"
import styled from "styled-components"
import { StyledLink } from "../../index.styles";
import { DateManager } from "../../utility/date-manager";

const ProjectLink = styled(StyledLink)`
width: 60%;
`

const ProjectList = props => {
  let projects = props.projects

  return (
    <>
      {projects.map((project, index) => (
        <ProjectLink to={`/${project.url}`} key={index}>  {project.participant}, {project.title}{props.showDate ?  `, ${DateManager.toMonthYearString(project.end_date)}` : null} </ProjectLink>
      ))}
    </>
  )
}

export default ProjectList
