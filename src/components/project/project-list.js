import React from "react"
import styled from "styled-components"
import { Link } from "gatsby";

const ProjectLink = styled(Link)`

`

const ProjectList = props => {
  let projects = props.projects

  return (
    <>
      {projects.map((project, index) => (
        <ProjectLink to={`/${project.url}`} key={index}> {project.title} </ProjectLink>
      ))}
    </>
  )
}

export default ProjectList
