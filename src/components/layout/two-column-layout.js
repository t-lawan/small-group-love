import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Layout from "./layout";
import { TwoColumnSection } from "../../index.styles";
import SideNavigation from "../side-navigation/side-navigation";

const SideNavigationWrapper = styled.div`
    background: transparent;
    position: absolute;
    width: 20%;
    top: 0;
`

const MainContent = styled.div`
    padding: 0.25rem;
`
const TwoColumnLayout = props => {
    return (
      <Layout>
          <div>
              <SideNavigationWrapper>
                <SideNavigation showArchive={props.showArchive ? props.showArchive : false}/>
              </SideNavigationWrapper>
              <MainContent>
                  {props.children}
              </MainContent>
          </div>
      </Layout>
    )
  }
  
  TwoColumnLayout.propTypes = {
    children: PropTypes.node.isRequired
  }
  
  export default TwoColumnLayout