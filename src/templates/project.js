import React from "react"
import { Convert } from "../utility/convert";
import TwoColumnLayout from "../components/layout/two-column-layout";
import PageContent from "../components/page-content/page-content";
import ProjectContent from "../components/project-content/project-content";

const Project = props => {
  return (
    <TwoColumnLayout showArchive={true}>
        <ProjectContent project={Convert.toProjectModel(props.pageContext)} />
    </TwoColumnLayout>
  )
}

export default Project
