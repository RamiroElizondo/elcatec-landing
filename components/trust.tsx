"use client"

import { ShieldCheck, Award, Clock, Sparkles, Star } from "lucide-react"

const guarantees = [
  {
    icon: ShieldCheck,
    title: "Garantía por escrito",
    description: "Todos nuestros trabajos incluyen garantía documentada.",
  },
  {
    icon: Award,
    title: "Materiales certificados",
    description: "Solo usamos materiales de primera marca con garantía.",
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Llegamos en el horario acordado. Tu tiempo vale.",
  },
  {
    icon: Sparkles,
    title: "Limpieza total",
    description: "Dejamos el lugar impecable al terminar cada trabajo.",
  },
]

const reviews = [
  {
    name: "María L.",
    location: "Santa Lucia, San Juan",
    rating: 5,
    text: "Excelente servicio. Llegaron puntual, hicieron el trabajo rápido y dejaron todo limpio. El precio estuvo bien.",
  },
  {
    name: "Carlos R.",
    location: "Rawson, San Juan",
    rating: 5,
    text: "Contraté el paquete Hogar Seguro y quedé muy conforme. Profesionales serios y con conocimiento. Lo recomiendo.",
  },
  {
    name: "Ana G.",
    location: "Captal, San Juan",
    rating: 5,
    text: "El presupuesto virtual me ahorró tiempo. Mandaron todo detallado por WhatsApp y el precio final fue el adecuado.",
  },
]

export function Trust() {
  return (
    <section id="confianza" className="relative py-24 scroll-mt-20">
      <div className="absolute inset-0 bg-secondary/50 circuit-pattern" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Confianza respaldada por resultados
          </h2>
        </div>

        {/* Guarantees */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {guarantees.map((g) => {
            const Icon = g.icon
            return (
              <div
                key={g.title}
                className="flex flex-col items-center gap-4 text-center rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-7" />
                </div>
                <h3 className="font-semibold text-card-foreground">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {g.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Reviews */}
        <div className="flex flex-col items-center gap-4 text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground">
            Lo que dicen nuestros clientes
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="text-sm text-card-foreground leading-relaxed">
                {`"${r.text}"`}
              </p>
              <div className="mt-auto">
                <p className="text-sm font-semibold text-card-foreground">
                  {r.name}
                </p>
                <p className="text-xs text-muted-foreground">{r.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
