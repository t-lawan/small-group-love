import React from "react"
import styled from "styled-components"
import { StyledLink, size } from "../../index.styles"
import { DateManager } from "../../utility/date-manager"

const ProjectLink = styled(StyledLink)`
  /* width: 60%; */
  @media (max-width: ${size.mobileL}) {
    /* width: 100%; */
  }
`

const ProjectTitle = styled.p`

`

const ProjectList = props => {
  let projects = props.projects

  return (
    <>
      {projects.map((project, index) => (
        <>
        {props.withLinks ? (
          <ProjectLink to={`/${project.url}`} key={index}>
          {" "}
          {project.participant}, {project.title}
          {props.showDate
            ? `, ${DateManager.toMonthYearString(project.end_date)}`
            : null}{" "}
        </ProjectLink>
        ) : (
          <ProjectTitle key={index}>
          {" "}
          {project.participant}, {project.title}
          {props.showDate
            ? `, ${DateManager.toMonthYearString(project.end_date)}`
            : null}{" "}
        </ProjectTitle>
        )}

        </>

      ))}
    </>
  )
}

export default ProjectList
