"use client"

import { Camera, Video, FileText, MapPin, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function QuoteModalities() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-secondary/50 circuit-pattern" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Modalidades de presupuesto
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Elegí cómo recibir tu presupuesto
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Virtual */}
          <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-whatsapp text-foreground text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              $ 1000
            </div>
            <div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Presupuesto virtual
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recibí tu presupuesto sin moverte de tu casa. Mandanos fotos,
                videos y una descripción del trabajo.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-card-foreground">
                <Camera className="size-5 text-primary shrink-0" />
                <span>Subí fotos del área de trabajo</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-card-foreground">
                <Video className="size-5 text-primary shrink-0" />
                <span>Enviá videos para más detalle</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-card-foreground">
                <FileText className="size-5 text-primary shrink-0" />
                <span>Describí qué necesitás</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {[
                "Respuesta en menos de 24hs",
                "Sin costo alguno",
                "Presupuesto detallado por WhatsApp",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <CheckCircle2 className="size-3.5 text-whatsapp shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button
              className="bg-whatsapp text-foreground hover:bg-whatsapp/90 mt-auto"
              asChild
            >
              <a
                href="https://wa.me/5492644726549?text=Hola!%20Quiero%20un%20presupuesto%20virtual"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pedir presupuesto virtual
              </a>
            </Button>
          </div>

          {/* Presencial */}
          <div className="flex flex-col gap-6 rounded-2xl border border-primary/30 bg-card p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-bl-xl">
              $ 30000
            </div>
            <div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">
                Visita técnica presencial
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Evaluación profesional en el lugar. El valor de la visita se
                descuenta si realizás el trabajo con nosotros.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-card-foreground">
                <MapPin className="size-5 text-primary shrink-0" />
                <span>Evaluación in situ por un profesional</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-card-foreground">
                <FileText className="size-5 text-primary shrink-0" />
                <span>Presupuesto exacto y detallado</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-card-foreground">
                <CheckCircle2 className="size-5 text-primary shrink-0" />
                <span>Se descuenta del trabajo final</span>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              {[
                "Diagnóstico completo del sistema",
                "Presupuesto con validez 15 días",
                "Se descuenta si contratás el servicio",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-muted-foreground"
                >
                  <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90 mt-auto"
              asChild
            >
              <a href="#agenda">Agendar visita técnica</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
