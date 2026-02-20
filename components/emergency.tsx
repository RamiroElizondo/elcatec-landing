"use client"

import { useState } from "react"
import { Zap, AlertTriangle, Clock, MessageCircle } from "lucide-react"

const EMERGENCY_CASES = [
  "Cualquier problema que impida tener suministro eléctrico",
  "Si el problema es de los proveedores de energia electrica no podremos resolverlo",
  "Cortocircuito",
  "Fuga eléctrica",
  "Falla de conductores",
]

export function Emergency() {
  const [selectedTime, setSelectedTime] = useState<"before" | "after">("before")

  const timeLabel =
    selectedTime === "before" ? "antes de las 20 hs" : "después de las 20 hs"
  const msg = `Necesito una emergencia eléctrica.%0AHorario estimado: ${timeLabel}`
  const whatsappUrl = `https://wa.me/5492644726549?text=${msg}`

  return (
    <section
      id="emergencias"
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Background glow layers */}
      <div className="absolute inset-0 bg-[#0d0000]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,102,0,0.12)_0%,transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(220,38,38,0.08)_0%,transparent_50%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,102,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,0.3) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
        {/* Urgency badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-destructive/15 border border-destructive/30 px-4 py-1.5 text-sm font-bold text-destructive animate-glow-pulse">
            <AlertTriangle className="size-4" />
            EMERGENCIAS ELÉCTRICAS 24/7
          </span>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground mb-4 text-balance">
            <span className="text-primary">{"¿TE QUEDASTE SIN LUZ?"}</span>
            <br />
            ATENCIÓN EN EL DÍA
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Servicio prioritario con resolución inmediata.
          </p>
        </div>

        {/* Emergency cases */}
        <div className="mx-auto max-w-2xl mb-12">
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 sm:p-8">
            <p className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Zap className="size-4 text-primary" />
              Casos que atendemos
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {EMERGENCY_CASES.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-destructive animate-glow-pulse" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Price cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto mb-8">
          {/* Before 20:00 */}
          <button
            onClick={() => setSelectedTime("before")}
            className={`relative flex flex-col items-center gap-3 rounded-2xl border-2 p-6 sm:p-8 text-center transition-all ${
              selectedTime === "before"
                ? "border-primary bg-primary/10 shadow-[0_0_30px_rgba(255,102,0,0.15)]"
                : "border-border bg-card hover:border-primary/30"
            }`}
          >
            <Clock className="size-6 text-primary" />
            <span className="text-sm font-semibold text-muted-foreground">
              Antes de las 20:00 hs
            </span>
            <span className="text-4xl font-black text-primary">Desde $50.000</span>
            {selectedTime === "before" && (
              <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-0.5 text-[11px] font-bold text-primary-foreground">
                Seleccionado
              </span>
            )}
          </button>

          {/* After 20:00 */}
          <button
            onClick={() => setSelectedTime("after")}
            className={`relative flex flex-col items-center gap-3 rounded-2xl border-2 p-6 sm:p-8 text-center transition-all ${
              selectedTime === "after"
                ? "border-primary bg-primary/10 shadow-[0_0_30px_rgba(255,102,0,0.15)]"
                : "border-border bg-card hover:border-primary/30"
            }`}
          >
            <Clock className="size-6 text-destructive" />
            <span className="text-sm font-semibold text-muted-foreground">
              Después de las 20:00 hs
            </span>
            <span className="text-4xl font-black text-primary">
              {"Desde $70.000"}
            </span>
            {selectedTime === "after" && (
              <span className="absolute -top-3 right-4 rounded-full bg-primary px-3 py-0.5 text-[11px] font-bold text-primary-foreground">
                Seleccionado
              </span>
            )}
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground mb-10 max-w-lg mx-auto leading-relaxed">
          Las emergencias requieren reprogramación de agenda y atención
          inmediata, por eso tienen un valor diferencial.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-destructive px-8 py-4 text-sm sm:text-base font-bold text-destructive-foreground shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all hover:shadow-[0_0_40px_rgba(220,38,38,0.45)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="size-5" />
            SOLICITAR EMERGENCIA POR WHATSAPP
          </a>

          <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
            <Zap className="size-3 text-primary" />
            Disponible para hogares, comercios e industrias
          </span>
        </div>
      </div>
    </section>
  )
}
