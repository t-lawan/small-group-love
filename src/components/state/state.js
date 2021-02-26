import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Convert } from "../../utility/convert"
import {
  isLoaded,
  setNavbarLinks,
  setPages,
  setProjects,
  setSideNavbarLinks
} from "../../store/actions"

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
        allContentfulSideNavigationLink {
          edges {
            node {
              contentful_id
              title
              linkedPage {
                contentful_id
                title
                url
              }
              order
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
                images {
                  fluid(quality: 100, maxWidth: 2000) {
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
              type
              backgroundImage {
                fluid(quality: 100, maxWidth: 2000) {
                  aspectRatio
                  src
                  srcSet
                  sizes
                }
              }
            }
          }
        }
        allContentfulProject {
          edges {
            node {
              contentful_id
              startDate
              endDate
              title
              isCurrent
              contentSection {
                contentful_id
                text {
                  raw
                }
                title
                type
                images {
                  fluid(quality: 100, maxWidth: 2000) {
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
              url
              participant
              page
            }
          }
        }
      }
    `
  )
  if (!props.isLoaded) {
    let {
      allContentfulNavigationLink,
      allContentfulSideNavigationLink,
      allContentfulPage,
      allContentfulProject
    } = data

    let navbarLinks = Convert.toModelArray(
      allContentfulNavigationLink,
      Convert.toNavigationLink
    )

    let sideNavbarLinks = Convert.toModelArray(
      allContentfulSideNavigationLink,
      Convert.toSideNavigationLink
    )

    let pages = Convert.toModelArray(allContentfulPage, Convert.toPageModel)
    let projects = Convert.toModelArray(
      allContentfulProject,
      Convert.toProjectModel
    )
    props.setNavbarLinks(navbarLinks)
    props.setSideNavbarLinks(sideNavbarLinks)

    props.setPages(pages)
    // props.setSiteInfo(siteInfo)
    props.setProjects(projects)
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
    setSideNavbarLinks: side_navbar_links =>
      dispatch(setSideNavbarLinks(side_navbar_links)),
    setPages: pages => dispatch(setPages(pages)),
    setProjects: projects => dispatch(setProjects(projects)),
    loaded: () => dispatch(isLoaded())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(State)
