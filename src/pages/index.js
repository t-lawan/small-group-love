import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import Layout from "../components/layout/layout"
import PageLinksSection from "../components/page-links-section/page-links-section"
import TwoColumnLayout from "../components/layout/two-column-layout"
import PageContent from "../components/page-content/page-content";

const MainSection = styled.div`
  height: 90vh;
`
const IndexPage = props => {

  let mainPage =  props.pages.find((pg) => {
    return pg.title === "Main";
  })

  return (
    <Layout>
      <MainSection>
        {mainPage ?  <PageContent page={mainPage} isHome={true} /> : null}
      </MainSection>
      <PageLinksSection />
    </Layout>
  )
}
const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded,
    pages: state.pages
  }
}

export default connect(
  mapStateToProps,
  null
)(IndexPage)
