import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { Link } from "gatsby";
import { StyledLink, size } from "../../index.styles";

const SideNavigationWrapper = styled.div`
    padding-left: 1rem;
`

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* align-items: center; */
`

const SideNavigationLink = styled(StyledLink)`
    color: blue;
    padding-top: 1rem;
    font-size: 3rem;
    @media (max-width: ${size.tablet}) {
        font-size: 2rem;
    }
    @media (max-width: ${size.mobileL}) {
        font-size: 1rem;
    }
`
const SideNavigation = props => {
    let links = [];
    links = props.side_navbar_links.sort((a, b) => {
        return a.order - b.order
    })

    if(!props.showArchive) {
        links = links.filter(link => {
            return link.title !== "Archive"
        })
    }
    return (
       <SideNavigationWrapper>
            <LinksWrapper>
                {links.map((link, index) => (
                    <SideNavigationLink to={`/${link.page.url}`} key={index}> {link.title.toUpperCase()} </SideNavigationLink>
                ))}
            </LinksWrapper>
       </SideNavigationWrapper>
    )
  }
  const mapStateToProps = state => {
    return {
        side_navbar_links: state.side_navbar_links,
    }
  }
  
  export default connect(
    mapStateToProps,
    null
  )(SideNavigation)