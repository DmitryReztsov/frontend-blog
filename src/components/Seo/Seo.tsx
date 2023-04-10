import React, { FC, PropsWithChildren } from "react"

import { useSiteMetadata } from '@hooks/useSiteMetadata';

interface SeoProps {
  title?: string,
  description?: string,
  pathname?: string,
}

const Seo: FC<PropsWithChildren<SeoProps>> = ({
  title, description, pathname, children
}) => {
  const { title: defaultTitle, description: defaultDescription, siteUrl } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      {children}
    </>
  )
}

export default Seo;