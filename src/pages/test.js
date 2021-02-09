import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import PageLinksSection from "../components/page-links-section/page-links-section";
import TwoColumnLayout from "../components/layout/two-column-layout";

const MainSection = styled.div`
`
const TestPage = () => (
  <TwoColumnLayout>
    <MainSection>
        <h1>Test Page</h1>
    </MainSection>

  </TwoColumnLayout>
)

export default TestPage
