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

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const MainContent = styled.div`
    padding: 0.25rem;
    width: 80%;
`
const TwoColumnLayout = props => {
    return (
      <Layout>
                  <SideNavigationWrapper>
                <SideNavigation showArchive={props.showArchive ? props.showArchive : false}/>
              </SideNavigationWrapper>
          <Wrapper>
  
              <MainContent>
                  {props.children}
              </MainContent>
          </Wrapper>
      </Layout>
    )
  }
  
  TwoColumnLayout.propTypes = {
    children: PropTypes.node.isRequired
  }
  
  export default TwoColumnLayout