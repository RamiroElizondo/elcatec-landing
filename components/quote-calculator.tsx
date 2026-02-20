"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import {
  Calculator,
  ChevronLeft,
  ChevronRight,
  Clock,
  DollarSign,
  MessageCircle,
  MapPin,
} from "lucide-react"

const WORK_TYPES = [
  { id: "toma", label: "Cambio de toma", base: 15000, time: 0.5 },
  { id: "ventilador", label: "Instalación de ventilador", base: 30000, time: 2 },
  { id: "punto", label: "Punto eléctrico nuevo", base: 15000, time: 0.5 },
  { id: "termica", label: "Cambio de térmica", base: 18000, time: 1.5 },
  { id: "luminaria", label: "Colocación de aplique", base: 10000, time: 0.4 },
  { id: "reparacion", label: "Reparación general", base: 20000, time: 1 },
  { id: "tablero", label: "Revisión y ajuste de tablero", base: 25000, time: 3 },
  { id: "cableado", label: "Recableado cada 3 metros", base: 20000, time: 2 },
]

const DIFFICULTY = [
  { id: "baja", label: "Baja", description: "Trabajo sencillo a nivel del suelo sin uso de escalera dentro del mismo ambiente", mult: 1.05 },
  { id: "media", label: "Media", description: "Trabajo entre 2 a 5 metros de altura en 2 ambientes máximo", mult:1.10 },
  { id: "alta", label: "Alta", description: "Trabajo a 5 metros de altura sin máximo y más de dos ambientes involucrados", mult: 1.20},
]

const URGENCY = [
  { id: "normal", label: "Normal", description: "Dentro de 3-5 días", mult: 1.10 },
  { id: "pronto", label: "Pronto", description: "Dentro de 24-48hs", mult: 1.15 },
  { id: "urgente", label: "Urgente", description: "Hoy o mañana", mult: 1.25 },
]

const ZONES = [
  { id: "capital", label: "Capital", mult: 1, extraTime: 0 },
  { id: "chimbas", label: "Chimbas", mult: 1.05, extraTime: 0.3 },
  { id: "rawson", label: "Rawson", mult: 1.05, extraTime: 0.3 },
  { id: "rivadavia", label: "Rivadavia", mult: 1.10, extraTime: 0.5 },
  { id: "santa-lucia", label: "Santa Lucía", mult: 1, extraTime: 0.3 },
  { id: "pocito", label: "Pocito", mult: 1.15, extraTime: 0.5 },
  { id: "albardon", label: "Albardón", mult: 1.15, extraTime: 0.7 },
  { id: "san-martin", label: "San Martín", mult: 1.15, extraTime: 0.8 },
  { id: "caucete", label: "Caucete", mult: 1.2, extraTime: 1 },
  { id: "25-de-mayo", label: "25 de Mayo", mult: 1.20, extraTime: 1 },
  { id: "sarmiento", label: "Sarmiento", mult: 3, extraTime: 1.2 },
  { id: "9-de-julio", label: "9 de Julio", mult: 1.15, extraTime: 1 },
  { id: "zonda", label: "Zonda", mult: 2, extraTime: 0.8 },
  { id: "ullum", label: "Ullum", mult: 2, extraTime: 1 },
  { id: "angaco", label: "Angaco", mult: 1.15, extraTime: 1.2 }
]

const PROPERTY_TYPES = [
  { id: "depto", label: "Departamento", description: "Unidad en edificio", mult: 1, extraTime: 0 },
  { id: "casa", label: "Casa", description: "Vivienda unifamiliar", mult: 1.05, extraTime: 0.3 },
  { id: "oficina", label: "Oficina / Comercio", description: "Local comercial o profesional", mult: 1.15, extraTime: 0.5 },
  { id: "galpon", label: "Galpón / Industrial", description: "Espacio amplio o industrial", mult: 1.3, extraTime: 1 },
  { id: "campo", label: "Finca / Campo", description: "Propiedad rural", mult: 1.35, extraTime: 1.5 },
]

export function QuoteCalculator() {
  const [step, setStep] = useState(0)
  const [workTypes, setWorkTypes] = useState<string[]>([])
  const [quantities, setQuantities] = useState<Record<string, number>>({})
  const [difficulty, setDifficulty] = useState("")
  const [urgency, setUrgency] = useState("")
  const [zone, setZone] = useState("")
  const [property, setProperty] = useState("")

  const selectedWorks = WORK_TYPES.filter((w) => workTypes.includes(w.id))
  const selectedDiff = DIFFICULTY.find((d) => d.id === difficulty)
  const selectedUrg = URGENCY.find((u) => u.id === urgency)
  const selectedZone = ZONES.find((z) => z.id === zone)
  const selectedProp = PROPERTY_TYPES.find((p) => p.id === property)

  function toggleWorkType(id: string) {
    setWorkTypes((prev) => {
      if (prev.includes(id)) {
        const next = prev.filter((t) => t !== id)
        setQuantities((q) => {
          const copy = { ...q }
          delete copy[id]
          return copy
        })
        return next
      }
      setQuantities((q) => ({ ...q, [id]: 1 }))
      return [...prev, id]
    })
  }

  function setQty(id: string, val: number) {
    setQuantities((q) => ({ ...q, [id]: Math.max(1, Math.min(20, val)) }))
  }

  const estimate = useMemo(() => {
    if (selectedWorks.length === 0) return { price: 0, time: 0 }
    const diffMult = selectedDiff?.mult ?? 1
    const urgMult = selectedUrg?.mult ?? 1
    const zoneMult = selectedZone?.mult ?? 1
    const propMult = selectedProp?.mult ?? 1
    const zoneExtra = selectedZone?.extraTime ?? 0
    const propExtra = selectedProp?.extraTime ?? 0
    const totalPrice = selectedWorks.reduce(
      (sum, w) => sum + w.base * (quantities[w.id] ?? 1),
      0
    )
    const totalTime = selectedWorks.reduce(
      (sum, w) => sum + w.time * (quantities[w.id] ?? 1),
      0
    )
    return {
      price: Math.round(totalPrice * diffMult * urgMult * zoneMult * propMult),
      time: Math.round((totalTime * diffMult + zoneExtra + propExtra) * 10) / 10,
    }
  }, [selectedWorks, quantities, selectedDiff, selectedUrg, selectedZone, selectedProp])

  const allQuantitiesSet = selectedWorks.every((w) => (quantities[w.id] ?? 1) >= 1)

  const canNext =
    (step === 0 && workTypes.length > 0) ||
    (step === 1 && allQuantitiesSet) ||
    (step === 2 && difficulty) ||
    (step === 3 && urgency) ||
    (step === 4 && zone) ||
    (step === 5 && property) ||
    step === 6

  const steps = [
    "Trabajo",
    "Cantidad",
    "Dificultad",
    "Urgencia",
    "Zona",
    "Propiedad",
    "Resultado",
  ]

  function buildWhatsAppMessage(type: "virtual" | "presencial") {
    const workDetail = selectedWorks
      .map((w) => `${w.label} x${quantities[w.id] ?? 1}`)
      .join(", ")
    const hasDiscount = estimate.price > 90000
    const finalPrice = hasDiscount ? Math.round(estimate.price * 0.9) : estimate.price
    const discountLine = hasDiscount ? `%0ADescuento 10%25 aplicado (original: $${estimate.price.toLocaleString("es-AR")})` : ""
    const msg = `Hola ELCATEC! Quiero un presupuesto ${type === "virtual" ? "virtual" : "con visita técnica"}.%0A%0ATrabajos: ${workDetail}%0ADificultad: ${selectedDiff?.label}%0AUrgencia: ${selectedUrg?.label}%0AZona: ${selectedZone?.label}%0APropiedad: ${selectedProp?.label}%0AEstimado: $${finalPrice.toLocaleString("es-AR")}${discountLine}`
    return `https://wa.me/5492644726549?text=${msg}`
  }

  return (
    <section id="calculadora" className="relative py-24 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Calculadora interactiva
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Calculá tu presupuesto en minutos
          </h2>
          <p className="text-muted-foreground max-w-lg leading-relaxed">
            Configurá tu trabajo paso a paso y obtené un estimado al instante.
          </p>
        </div>

        {/* Progress bar */}
        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex-1 flex flex-col gap-1">
              <div
                className={`h-1.5 rounded-full transition-colors ${
                  i <= step ? "bg-primary" : "bg-border"
                }`}
              />
              <span
                className={`text-[10px] hidden sm:block ${
                  i <= step ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {s}
              </span>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          {/* Step 0: Work type */}
          {step === 0 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-card-foreground">
                Seleccioná los tipos de trabajo
              </h3>
              <p className="text-sm text-muted-foreground -mt-2">
                Podés elegir más de uno
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {WORK_TYPES.map((w) => {
                  const isSelected = workTypes.includes(w.id)
                  return (
                    <button
                      key={w.id}
                      onClick={() => toggleWorkType(w.id)}
                      className={`flex items-start gap-3 rounded-xl border p-4 text-left transition-all ${
                        isSelected
                          ? "border-primary bg-primary/10 text-card-foreground"
                          : "border-border bg-secondary/50 text-card-foreground hover:border-primary/30"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                          isSelected
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-muted-foreground"
                        }`}
                      >
                        {isSelected && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="size-3"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium text-sm">{w.label}</span>
                        <span className="text-xs text-muted-foreground">
                          {"Desde $"}
                          {w.base.toLocaleString("es-AR")}
                        </span>
                      </div>
                    </button>
                  )
                })}
              </div>
              {workTypes.length > 0 && (
                <p className="text-sm text-primary font-medium">
                  {workTypes.length} {workTypes.length === 1 ? "trabajo seleccionado" : "trabajos seleccionados"}
                </p>
              )}
            </div>
          )}

          {/* Step 1: Quantity per work type */}
          {step === 1 && (
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-card-foreground">
                Cantidad por cada trabajo
              </h3>
              <div className="flex flex-col gap-4">
                {selectedWorks.map((w) => {
                  const qty = quantities[w.id] ?? 1
                  return (
                    <div
                      key={w.id}
                      className="flex items-center justify-between gap-4 rounded-xl border border-border bg-secondary/50 p-4"
                    >
                      <div className="flex flex-col gap-0.5 min-w-0">
                        <span className="font-medium text-sm text-card-foreground truncate">
                          {w.label}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {"$"}
                          {w.base.toLocaleString("es-AR")} c/u
                        </span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <button
                          onClick={() => setQty(w.id, qty - 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground hover:border-primary/30 transition-colors text-sm"
                          aria-label={`Reducir cantidad de ${w.label}`}
                        >
                          -
                        </button>
                        <span className="text-xl font-bold text-primary min-w-[32px] text-center">
                          {qty}
                        </span>
                        <button
                          onClick={() => setQty(w.id, qty + 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground hover:border-primary/30 transition-colors text-sm"
                          aria-label={`Aumentar cantidad de ${w.label}`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 2: Difficulty */}
          {step === 2 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-card-foreground">
                Nivel de dificultad
              </h3>
              <div className="grid gap-3">
                {DIFFICULTY.map((d) => (
                  <button
                    key={d.id}
                    onClick={() => setDifficulty(d.id)}
                    className={`flex flex-col gap-1 rounded-xl border p-4 text-left transition-all ${
                      difficulty === d.id
                        ? "border-primary bg-primary/10 text-card-foreground"
                        : "border-border bg-secondary/50 text-card-foreground hover:border-primary/30"
                    }`}
                  >
                    <span className="font-medium">{d.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {d.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Urgency */}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-card-foreground">
                Urgencia del trabajo
              </h3>
              <div className="grid gap-3">
                {URGENCY.map((u) => (
                  <button
                    key={u.id}
                    onClick={() => setUrgency(u.id)}
                    className={`flex flex-col gap-1 rounded-xl border p-4 text-left transition-all ${
                      urgency === u.id
                        ? "border-primary bg-primary/10 text-card-foreground"
                        : "border-border bg-secondary/50 text-card-foreground hover:border-primary/30"
                    }`}
                  >
                    <span className="font-medium">{u.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {u.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Zone (Departamento de San Juan) */}
          {step === 4 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-card-foreground">
                Zona / Departamento de San Juan
              </h3>
              <p className="text-sm text-muted-foreground -mt-2">
                El precio varía según la distancia
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {ZONES.map((z) => (
                  <button
                    key={z.id}
                    onClick={() => setZone(z.id)}
                    className={`flex flex-col gap-0.5 rounded-xl border px-3 py-3 text-left transition-all ${
                      zone === z.id
                        ? "border-primary bg-primary/10 text-card-foreground"
                        : "border-border bg-secondary/50 text-card-foreground hover:border-primary/30"
                    }`}
                  >
                    <span className="font-medium text-sm">{z.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Property type */}
          {step === 5 && (
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-card-foreground">
                Tipo de propiedad
              </h3>
              <div className="grid gap-3">
                {PROPERTY_TYPES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setProperty(p.id)}
                    className={`flex flex-col gap-1 rounded-xl border p-4 text-left transition-all ${
                      property === p.id
                        ? "border-primary bg-primary/10 text-card-foreground"
                        : "border-border bg-secondary/50 text-card-foreground hover:border-primary/30"
                    }`}
                  >
                    <span className="font-medium">{p.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {p.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 6: Result */}
          {step === 6 && (
            <div className="flex flex-col gap-6">
              <h3 className="text-lg font-semibold text-card-foreground text-center">
                Tu presupuesto estimado
              </h3>

              {(() => {
                const hasDiscount = estimate.price > 90000
                const discountedPrice = hasDiscount
                  ? Math.round(estimate.price * 0.9)
                  : estimate.price
                return (
                  <div className="flex flex-col gap-4 items-center">
                    {hasDiscount && (
                      <div className="flex items-center gap-2 rounded-full bg-whatsapp/10 border border-whatsapp/30 px-4 py-1.5">
                        <span className="text-xs font-bold text-whatsapp">
                          10% OFF APLICADO
                        </span>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                      <div className="flex flex-col items-center gap-2 p-6 rounded-xl border border-primary/30 bg-primary/5">
                        <DollarSign className="size-6 text-primary" />
                        {hasDiscount && (
                          <span className="text-lg text-muted-foreground line-through">
                            {"$"}
                            {estimate.price.toLocaleString("es-AR")}
                          </span>
                        )}
                        <span className="text-3xl font-bold text-primary">
                          {"$"}
                          {discountedPrice.toLocaleString("es-AR")}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {hasDiscount ? "Precio con descuento" : "Precio estimado"}
                        </span>
                        {hasDiscount && (
                          <span className="text-xs font-medium text-whatsapp">
                            {"Ahorrás $"}
                            {(estimate.price - discountedPrice).toLocaleString("es-AR")}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col items-center gap-2 p-6 rounded-xl border border-border bg-secondary/50">
                        <Clock className="size-6 text-muted-foreground" />
                        <span className="text-3xl font-bold text-foreground">
                          {estimate.time}hs
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Tiempo estimado
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })()}

              {/* Summary */}
              <div className="rounded-xl bg-secondary/50 border border-border p-4 text-sm text-muted-foreground">
                <p className="mb-2">
                  <strong className="text-card-foreground">Trabajos:</strong>
                </p>
                <ul className="list-disc list-inside mb-2 space-y-0.5">
                  {selectedWorks.map((w) => (
                    <li key={w.id}>
                      {w.label} <span className="text-primary font-medium">x{quantities[w.id] ?? 1}</span>
                    </li>
                  ))}
                </ul>
                <p>
                  Dificultad: {selectedDiff?.label} | Urgencia: {selectedUrg?.label}
                </p>
                <p>
                  Zona: {selectedZone?.label} | Propiedad: {selectedProp?.label}
                </p>
              </div>

              <p className="text-center text-sm font-medium text-card-foreground">
                ¿Cómo querés confirmar tu presupuesto?
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="flex-1 bg-whatsapp text-foreground hover:bg-whatsapp/90 h-auto min-h-[48px] sm:min-h-[52px] px-4 sm:px-6 whitespace-normal text-center leading-snug"
                  asChild
                >
                  <a
                    href={buildWhatsAppMessage("virtual")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="size-5 mr-2" />
                    <span className="text-center">
                      Presupuesto calculado (gratis)
                    </span>
                  </a>
                </Button>
              </div>
            </div>
          )}

          {/* Live estimate bar */}
          {step > 0 && step < 6 && (
            <div className="mt-6 flex items-center justify-between rounded-xl bg-primary/5 border border-primary/20 p-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <DollarSign className="size-4 text-primary" />
                  <span className="text-sm font-bold text-primary">
                    {"$"}
                    {estimate.price.toLocaleString("es-AR")}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="size-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {estimate.time}hs
                  </span>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">
                Estimado en vivo
              </span>
            </div>
          )}

          {/* Navigation */}
          {step < 6 && (
            <div className="flex items-center justify-between mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setStep(step - 1)}
                disabled={step === 0}
                className="text-foreground"
              >
                <ChevronLeft className="size-4 mr-1" />
                Atrás
              </Button>
              <Button
                size="sm"
                onClick={() => setStep(step + 1)}
                disabled={!canNext}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Siguiente
                <ChevronRight className="size-4 ml-1" />
              </Button>
            </div>
          )}

          {step === 6 && (
            <div className="mt-4 text-center">
              <button
                onClick={() => {
                  setStep(0)
                  setWorkTypes([])
                  setQuantities({})
                  setDifficulty("")
                  setUrgency("")
                  setZone("")
                  setProperty("")
                }}
                className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                Calcular otro presupuesto
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
