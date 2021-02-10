import React from "react"
import { connect } from "react-redux"
import { useStaticQuery, graphql } from "gatsby"
import { Convert } from "../../utility/convert"
import { isLoaded, setNavbarLinks, setPages, setProjects } from "../../store/actions"

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
              type
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
            }
          }
        }
      }
    `
  )
  if (!props.isLoaded) {
    let {
      allContentfulNavigationLink,
      allContentfulPage,
      allContentfulProject
    } = data

    let navbarLinks = Convert.toModelArray(
      allContentfulNavigationLink,
      Convert.toNavigationLink
    )

    let pages = Convert.toModelArray(allContentfulPage, Convert.toPageModel)
    let projects = Convert.toModelArray(
      allContentfulProject,
      Convert.toProjectModel
    )
    props.setNavbarLinks(navbarLinks)

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
    setPages: pages => dispatch(setPages(pages)),
    setProjects: projects => dispatch(setProjects(projects)),
    loaded: () => dispatch(isLoaded())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(State)
