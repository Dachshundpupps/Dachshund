"use client"

import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppWidget() {
  const [isHovered, setIsHovered] = useState(false)

  const whatsappNumber = "13235447099"
  const message = "Hi! I'm interested in your dachshund puppies."

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <MessageCircle className="h-6 w-6" />
        <span
          className={`font-medium whitespace-nowrap overflow-hidden transition-all duration-300 ${
            isHovered ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
          }`}
        >
          Chat on WhatsApp
        </span>
      </div>
    </button>
  )
}
