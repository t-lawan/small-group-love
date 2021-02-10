import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Layout from "./layout";
import { TwoColumnSection } from "../../index.styles";
import SideNavigation from "../side-navigation/side-navigation";

const SideNavigationWrapper = styled.div`
    background: red;
`

const MainContent = styled.div`
`
const TwoColumnLayout = props => {
    return (
      <Layout>
          <TwoColumnSection>
              <SideNavigation />
              <MainContent>
                  {props.children}
              </MainContent>
          </TwoColumnSection>
      </Layout>
    )
  }
  
  TwoColumnLayout.propTypes = {
    children: PropTypes.node.isRequired
  }
  
  export default TwoColumnLayout