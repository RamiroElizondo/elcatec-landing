"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Calculator, MessageCircle, ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background circuit-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      {/* Yellow glow effect top-right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Copy */}
          <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance">
              {"SABÉS CUÁNTO VAS A PAGAR "}
              <span className="text-primary">ANTES DE QUE LLEGUEMOS</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Instalaciones eléctricas con precio claro, presupuesto online y
              atención profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 h-12"
                asChild
              >
                <a href="#calculadora">
                  <Calculator className="size-5 mr-2" />
                  CALCULAR PRESUPUESTO
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-whatsapp text-foreground hover:bg-whatsapp/90 text-base px-8 h-12"
                asChild
              >
                <a
                  href="https://wa.me/5492644726549"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-5 mr-2" />
                  HABLAR POR WHATSAPP
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 justify-center lg:justify-start pt-4">
              {[
                { value: "500+", label: "Trabajos realizados" },
                { value: "4.9", label: "Calificación" },
                { value: "24hs", label: "Respuesta" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-2xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-primary/5">
              <Image
                src="/images/hero-electrician.jpg"
                alt="Electricista profesional de ELCATEC trabajando"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-card border border-border p-4 shadow-xl animate-float">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-primary font-bold text-lg">$</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    Precio transparente
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Sin sorpresas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#precios"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
        aria-label="Ver precios"
      >
        <span className="text-xs">Ver precios</span>
        <ChevronDown className="size-4 animate-bounce" />
      </a>
    </section>
  )
}
