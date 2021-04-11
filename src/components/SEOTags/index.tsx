import React from 'react'
import Head from 'next/head'

export type SEOProps = {
  description?: string
  robots?: string
  title?: string
  canonical?: string
}

const SEOTags: React.FC<SEOProps> = ({
  description,
  robots,
  title,
  canonical,
}: SEOProps) => {
  return (
    <Head>
      <title>{title || 'Shop Name'}</title>
      {description && <meta content={description} name="description" />}
      {robots && <meta content={robots} name="robots" />}
      {canonical && <meta content={canonical} name="canonical" />}
    </Head>
  )
}

export default SEOTags
