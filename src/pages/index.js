import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import PageLinksSection from "../components/page-links-section/page-links-section";
import TwoColumnLayout from "../components/layout/two-column-layout";

const MainSection = styled.div`
  height: 90vh;
`
const IndexPage = () => (
  <Layout>
    <MainSection>
     <h1>Main Page</h1>
    </MainSection>
    <PageLinksSection />

  </Layout>
)

export default IndexPage
