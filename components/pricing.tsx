"use client"

import {
  Plug,
  Fan,
  CircuitBoard,
  ShieldCheck,
  Lightbulb,
  Wrench,
} from "lucide-react"

const services = [
  {
    icon: Plug,
    name: "Cambio de toma",
    price: "15.000",
    description: "Reemplazo de tomas de corriente y llaves de luz",
  },
  {
    icon: Fan,
    name: "Instalación de ventilador",
    price: "25.000",
    description: "Instalación de ventilador de techo con conexión eléctrica",
  },
  {
    icon: CircuitBoard,
    name: "Punto eléctrico nuevo",
    price: "20.000",
    description: "Nuevo punto de luz o toma desde el tablero",
  },
  {
    icon: ShieldCheck,
    name: "Cambio de térmica",
    price: "18.000",
    description: "Reemplazo de térmica o diferencial en tablero",
  },
  {
    icon: Lightbulb,
    name: "Colocación de luminarias",
    price: "12.000",
    description: "Instalación de luminarias LED empotrables o colgantes",
  },
  {
    icon: Wrench,
    name: "Reparación general",
    price: "10.000",
    description: "Diagnóstico y reparación de fallas eléctricas",
  },
]

export function Pricing() {
  return (
    <section id="precios" className="relative py-24 scroll-mt-20">
      <div className="absolute inset-0 bg-secondary/50 circuit-pattern" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Precios orientativos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Precios claros desde el primer momento
          </h2>
          <p className="text-muted-foreground max-w-lg leading-relaxed">
            Conocé nuestros precios base antes de contactarnos. Sin letra chica,
            sin sorpresas.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.name}
                className="group relative flex flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="size-6" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-card-foreground">
                      {service.name}
                    </h3>
                    <span className="text-lg font-bold text-primary">
                      {"desde $"}
                      {service.price}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          El precio final se confirma según evaluación del trabajo. Los valores
          son orientativos y pueden variar según complejidad.
        </p>
      </div>
    </section>
  )
}
