import React from "react"
import UpcomingProjects from "../project/upcoming-projects";
import ArchivedProjects from "../project/archived-projects";
import CurrentProjects from "../project/current-projects";

const PageSection = props => {
  let render = <p></p>

  switch (props.type) {
    case "current":
      render = <CurrentProjects />
      break;
    case "upcoming":
      render = <UpcomingProjects />
      break;
    case "archive":
      render = <ArchivedProjects />
      break;
    default:
      break
  }
  return render;
}

export default PageSection
