import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
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
    color: blue;
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