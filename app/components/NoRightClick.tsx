'use client'

import { useEffect } from 'react'

export default function NoRightClick() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Cegah Ctrl+U (view source)
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U')) {
        e.preventDefault()
        return false
      }
      // Cegah F12 (dev tools)
      if (e.key === 'F12') {
        e.preventDefault()
        return false
      }
      // Cegah Ctrl+Shift+I
      if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) {
        e.preventDefault()
        return false
      }
    }

    document.addEventListener('contextmenu', handleContextMenu)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return null
}
