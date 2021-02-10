import React from "react"
import { GenerateContentSection } from "../../utility/richtext"

const Content = props => {
  return (
    <>
      {props.info
        ? props.info.map((con, index) => GenerateContentSection(con, index))
        : null}
    </>
  )
}

export default Content
