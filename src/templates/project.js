import React from "react"
import { Convert } from "../utility/convert";
import TwoColumnLayout from "../components/layout/two-column-layout";
import ProjectContent from "../components/project-content/project-content";

const Project = props => {
  return (
    <TwoColumnLayout showArchive={true}>
        <ProjectContent project={Convert.toProjectModel(props.pageContext)} />
    </TwoColumnLayout>
  )
}

export default Project
