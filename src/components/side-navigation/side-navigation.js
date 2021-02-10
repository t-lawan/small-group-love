import React from "react"
import styled from "styled-components"
import { Link } from "gatsby";

const SideNavigationWrapper = styled.div`
`

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`

const SideNavigationLink = styled(Link)`

`
const SideNavigation = props => {
    let links = ['main', 'archive'];
    return (
       <SideNavigationWrapper>
            <LinksWrapper>
            {links.map((link, index) => (
                <SideNavigationLink to={'/'} key={index}> {link.toUpperCase()} </SideNavigationLink>
            ))}

            </LinksWrapper>
       </SideNavigationWrapper>
    )
  }
  
  export default SideNavigation