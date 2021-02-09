import React from "react"
import styled from "styled-components"
import { Link } from "gatsby";

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
    let page = props.pageContent;
    let links = ['current', 'upcoming', 'archive', 'info'];
    return (
       <PageLinksSectionWrapper>
            <LinksWrapper>
            {links.map((link, index) => (
                <PageLink to={'/test'} key={index}> {link.toUpperCase()} </PageLink>
            ))}

            </LinksWrapper>
       </PageLinksSectionWrapper>
    )
  }
  
  export default PageLinksSection