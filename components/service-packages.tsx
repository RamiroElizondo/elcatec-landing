"use client"

import { Shield, RefreshCw, Home, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const packages = [
  {
    icon: Shield,
    name: "Hogar Seguro",
    description: "Poné tu hogar en norma y dormí tranquilo.",
    price: "90000",
    ideal: "Hogares con instalación antigua o sin interruptor diferencial (disyuntor)",
    features: [
      "Revisión completa del sistema eléctrico",
      "Instalación de interruptor diferencial (disyuntor)",
      "Puesta a tierra reglamentaria (solo jabalina, consultar cableado)",
      "Garantía escrita de 1 año",
    ],
  },
  {
    icon: RefreshCw,
    name: "Renovación Eléctrica",
    description: "Actualizá toda tu instalación eléctrica.",
    price: "600.000",
    ideal: "Propiedades de más de 20 años o con problemas frecuentes",
    features: [
      "Recableado completo de la propiedad",
      "Tablero nuevo con protecciones",
      "Tomas y llaves nuevas",
      "Puntos de luz adicionales",
      "Garantía escrita de 1 año",
    ],
    popular: true,
  },
  {
    icon: Home,
    name: "Instalación Completa",
    description: "Todo lo que tu propiedad nueva necesita.",
    price: "800.000",
    ideal: "Construcciones nuevas, refacciones integrales",
    features: [
      "Instalación eléctrica desde cero",
      "Tablero general y seccional",
      "Tomas, llaves y puntos de luz",
      "Cableado estructurado",
      "Garantía escrita de 2 años",
    ],
  },
]

export function ServicePackages() {
  return (
    <section id="paquetes" className="relative py-24 scroll-mt-20">
      <div className="absolute inset-0 bg-background" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Paquetes de servicio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Soluciones completas para cada necesidad
          </h2>
          <p className="text-muted-foreground max-w-lg leading-relaxed">
            Paquetes pensados para resolver los problemas más comunes con precio
            cerrado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => {
            const Icon = pkg.icon
            return (
              <div
                key={pkg.name}
                className={`relative flex flex-col gap-6 rounded-2xl border p-8 transition-all hover:shadow-xl hover:shadow-primary/5 ${
                  pkg.popular
                    ? "border-primary bg-card shadow-lg shadow-primary/10"
                    : "border-border bg-card"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-3 sm:px-4 py-1 rounded-full whitespace-nowrap leading-none">
                    MÁS POPULAR
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                      pkg.popular
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-card-foreground">
                      {pkg.name}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {pkg.description}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-3xl font-bold text-primary">
                    {"desde $"}
                    {pkg.price}
                  </span>
                </div>

                <div className="flex flex-col gap-3">
                  {pkg.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-3 text-sm text-card-foreground leading-relaxed"
                    >
                      <CheckCircle2 className="size-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <p className="text-xs text-muted-foreground mb-4">
                    <strong className="text-card-foreground">Ideal para:</strong>{" "}
                    {pkg.ideal}
                  </p>
                  <Button
                    className={`w-full ${
                      pkg.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                    }`}
                    asChild
                  >
                    <a
                      href={`https://wa.me/5492644726549?text=Hola!%20Me%20interesa%20el%20paquete%20${pkg.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Consultar
                    </a>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
