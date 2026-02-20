"use client"

import Image from "next/image"
import { MessageCircle, Instagram, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      {/* Animated energy line */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-lg bg-primary/10 p-1.5">
                <Image
                  src="/logo.png"
                  alt="Logo de ELCATEC"
                  width={28}
                  height={28}
                  className="h-7 w-7"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                ELCATEC
              </span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Instalaciones eléctricas profesionales con precio transparente y
              atención de calidad.
            </p>
          </div>

          {/* Servicios */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">
              Servicios
            </h4>
            <nav className="flex flex-col gap-2">
              {[
                "Instalación eléctrica",
                "Reparación y mantenimiento",
                "Tableros eléctricos",
                "Iluminación LED",
                "Puesta a tierra",
              ].map((item) => (
                <span
                  key={item}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </nav>
          </div>

          {/* Área de cobertura */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">
            Área de cobertura
            </h4>
            <div className="flex flex-col gap-2">
              {[
                "Capital",
                "Chimbas / Rawson",
                "Rivadavia / Santa Lucía",
                "Pocito / Albardón",
                "San Martín / Caucete",
              ].map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <MapPin className="size-3 text-primary shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-semibold text-foreground">
              Contacto
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/5492644726549"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-whatsapp transition-colors"
              >
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
              <a
                href="https://www.instagram.com/elcatec/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="size-4" />
                @elcatec
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            {"ELCATEC - Instalaciones Eléctricas Profesionales"}
          </p>
          <p className="text-xs text-muted-foreground">
            {"Todos los precios son orientativos. Consultar valores actualizados."}
          </p>
        </div>
      </div>
    </footer>
  )
}
