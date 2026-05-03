import { useEffect } from 'react'
import { siteUrl } from '../lib/routes'

type SEOProps = {
  title: string
  description: string
  path?: string
  image?: string
  pageTitle?: string
  type?: 'website' | 'article'
}

const defaultImage = '/images/brand/og.png'

const absoluteUrl = (value: string) =>
  value.startsWith('http') ? value : `${siteUrl}${value}`

const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

export default function SEO({
  title,
  description,
  path = '/',
  image = defaultImage,
  pageTitle,
  type = 'website',
}: SEOProps) {
  useEffect(() => {
    const documentTitle = pageTitle ?? `${title} - Relax Tub`
    const url = absoluteUrl(path)
    const imageUrl = absoluteUrl(image)

    document.documentElement.lang = 'sk'
    document.title = documentTitle

    setMeta('name', 'description', description)
    setMeta('property', 'og:type', type)
    setMeta('property', 'og:locale', 'sk_SK')
    setMeta('property', 'og:site_name', 'Relax Tub')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', imageUrl)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', imageUrl)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [description, image, pageTitle, path, title, type])

  return null
}
