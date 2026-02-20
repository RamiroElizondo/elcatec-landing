"use client"

import { Banknote, CreditCard, Landmark, Layers } from "lucide-react"

const methods = [
  {
    icon: Landmark,
    name: "Transferencia",
    description: "Bancaria o billetera virtual",
  },
  {
    icon: Banknote,
    name: "Efectivo",
    description: "Pago en mano al finalizar",
    badge: "10% OFF",
  },
  {
    icon: CreditCard,
    name: "Tarjeta",
    description: "Débito y crédito",
  },
  {
    icon: Layers,
    name: "Cuotas",
    description: "Hasta 6 cuotas sin interés",
  },
]

export function PaymentMethods() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-background" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Medios de pago
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Pagá como te resulte más cómodo
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {methods.map((m) => {
            const Icon = m.icon
            return (
              <div
                key={m.name}
                className="relative flex flex-col items-center gap-3 text-center rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors"
              >
                {m.badge && (
                  <div className="absolute -top-2.5 right-3 bg-whatsapp text-foreground text-[10px] font-bold px-2.5 py-0.5 rounded-full">
                    {m.badge}
                  </div>
                )}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="size-6" />
                </div>
                <h3 className="font-semibold text-card-foreground">{m.name}</h3>
                <p className="text-xs text-muted-foreground">{m.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
