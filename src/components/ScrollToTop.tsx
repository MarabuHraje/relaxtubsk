import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (hash) {
      const scrollToHash = () => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }

      const initialScroll = window.setTimeout(scrollToHash, 0)
      const layoutScroll = window.setTimeout(scrollToHash, 180)

      return () => {
        window.clearTimeout(initialScroll)
        window.clearTimeout(layoutScroll)
      }
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [hash, pathname])

  return null
}
