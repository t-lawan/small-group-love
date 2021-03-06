import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"
import { StyledLink, size } from "../../index.styles";

const PageLinksSectionWrapper = styled.div`
    position: fixed;
    bottom: 20%;
    width: 100%;
    background: transparent;
    z-index: 1000;
    @media (max-width: ${size.mobileL}) {
    bottom: 40%;

  }
`

const LinksWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: baseline;
`

const PageLink = styled(StyledLink)`
    color: blue;
    font-size: 2rem;
    @media (max-width: ${size.mobileL}) {
        font-size: 1rem;
    }
`

const PageLinkSpan = styled.span`
    color: blue;
    font-size: 2rem;
    @media (max-width: ${size.mobileL}) {
        font-size: 1rem;
    }
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
                <React.Fragment key={index}>
                <PageLink to={link.page.url} key={index}> {link.title.toUpperCase()} </PageLink>
                {links.length !== index + 1 ? <PageLinkSpan> - </PageLinkSpan> : null}
                </React.Fragment>
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