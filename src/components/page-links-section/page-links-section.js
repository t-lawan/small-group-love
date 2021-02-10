import React from "react"
import styled from "styled-components"
import { Link } from "gatsby";
import { connect } from "react-redux"

const PageLinksSectionWrapper = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
`

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`

const PageLink = styled(Link)`

`
const PageLinksSection = props => {
    
    let links = [];
    links = props.navbar_links.sort((a, b) => {
        return a.order - b.order;
    })
    return (
       <PageLinksSectionWrapper>
            <LinksWrapper>
            {links.map((link, index) => (
                <PageLink to={link.page.url} key={index}> {link.title.toUpperCase()} </PageLink>
            ))}

            </LinksWrapper>
       </PageLinksSectionWrapper>
    )
  }
  

  const mapStateToProps = state => {
    return {
      navbar_links: state.navbar_links,
    }
  }
  
  export default connect(
    mapStateToProps,
    null
  )(PageLinksSection)