"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/5492644726549?text=Hola%20ELCATEC!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-foreground shadow-lg shadow-whatsapp/30 hover:scale-110 transition-transform"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="size-7" />
    </a>
  )
}
