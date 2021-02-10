import React from "react"
import { Convert } from "../utility/convert";
import TwoColumnLayout from "../components/layout/two-column-layout";
import PageContent from "../components/page-content/page-content";

const Page = props => {
  return (
    <TwoColumnLayout>
      <PageContent pageContent={props.pageContext} />
    </TwoColumnLayout>
  )
}

export default Page
