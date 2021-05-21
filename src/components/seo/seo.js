/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { Convert } from "../../utility/convert"

function SEO({ description, lang, meta, title }) {
  const { contentfulSiteInfo } = useStaticQuery(
    graphql`
      query {
        contentfulSiteInfo {
          description {
            description
          }
          sharingImage {
            gatsbyImageData
            file {
              url
            }
          }
          name
        }
      }
    `
  )

  const siteInfo = Convert.toSiteModel(contentfulSiteInfo)
  console.log("SITE INFO", siteInfo)

  // const metaDescription = description || site.siteMetadata.description
  // const metaTitle = title || site.siteMetadata.title

  const metaDescription = description || siteInfo.description;
  const metaTitle = title || siteInfo.name;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${metaTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: "Ge Hinnom"
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
}

export default SEO
