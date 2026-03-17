"use client"

import { useEffect } from "react"

export function ChatwayWidget() {
  useEffect(() => {
    const script = document.createElement("script")
    script.id = "chatway"
    script.async = true
    script.src = "https://cdn.chatway.app/widget.js?id=xduwoYyzAlIR"

    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  return null
}
