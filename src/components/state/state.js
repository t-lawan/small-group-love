import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Convert } from "../../utility/convert"
import { isLoaded, setNavbarLinks, setPages } from "../../store/actions"

const State = props => {
  const data = useStaticQuery(
    graphql`
      {
        allContentfulNavigationLink {
          edges {
            node {
              contentful_id
              title
              order
              linkedPage {
                url
                contentful_id
                title
              }
            }
          }
        }
        allContentfulPage {
          edges {
            node {
              contentful_id
              title
              url
              contentSection {
                contentful_id
                title
                type
                text {
                  raw
                }
              }
            }
          }
        }
      }
    `
  )
  if (!props.isLoaded) {
    let { allContentfulNavigationLink, allContentfulPage } = data

    let navbarLinks = Convert.toModelArray(
      allContentfulNavigationLink,
      Convert.toNavigationLink
    )

    let pages = Convert.toModelArray(allContentfulPage, Convert.toPageModel)

    props.setNavbarLinks(navbarLinks)

    props.setPages(pages)
    // props.setSiteInfo(siteInfo)
    // props.setSidebarLinks(sidebarLinks)
    props.loaded()
  }

  return <></>
}

const mapStateToProps = state => {
  return {
    isLoaded: state.isLoaded
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNavbarLinks: navbar_links => dispatch(setNavbarLinks(navbar_links)),
    setPages: pages => dispatch(setPages(pages)),
    loaded: () => dispatch(isLoaded())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(State)
