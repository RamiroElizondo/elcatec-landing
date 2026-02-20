"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"

export function WhatsAppCTA() {
  return (
    <section id="contacto" className="relative py-24 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 lg:px-8 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-whatsapp/10 animate-glow-pulse">
            <MessageCircle className="size-10 text-whatsapp" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Mandanos tu presupuesto y coordinamos
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Escribinos por WhatsApp con tu presupuesto estimado, zona y tipo de
            trabajo. Te respondemos en menos de 1 hora.
          </p>

          <Button
            size="lg"
            className="bg-whatsapp text-foreground hover:bg-whatsapp/90 text-lg px-10 h-14 mt-2"
            asChild
          >
            <a
              href="https://wa.me/5492644726549?text=Hola%20ELCATEC!%20Quiero%20coordinar%20un%20servicio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-6 mr-2" />
              Escribir por WhatsApp
              <ArrowRight className="size-5 ml-2" />
            </a>
          </Button>

          <p className="text-xs text-muted-foreground">
            Atención de Lunes a Sábado de 8 a 20hs
          </p>
        </div>
      </div>
    </section>
  )
}
