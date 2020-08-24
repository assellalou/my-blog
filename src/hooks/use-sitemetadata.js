import { graphql, useStaticQuery } from "gatsby"

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
