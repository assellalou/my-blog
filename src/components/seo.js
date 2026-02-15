import React from "react"
import useSiteMetadata from "../hooks/use-sitemetadata"

const Seo = ({ title, description }) => {
  const site = useSiteMetadata()
  const pageTitle = title ? `${title} | ${site.title}` : site.title
  const pageDescription = description || site.description

  return (
    <>
      <html lang="en" />
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="keywords"
        content="assellalou, assellalou.com, mohammed assellalou, assellalou blog, assellalou portfolio"
      />
    </>
  )
}

export default Seo
