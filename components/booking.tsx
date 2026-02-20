"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, CalendarDays, MessageCircle, CircleCheck, Info } from "lucide-react"

const TIME_SLOTS = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
]

const DAYS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"]
const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
]

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate()
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay()
}

export function Booking() {
  const now = new Date()
  const [currentMonth, setCurrentMonth] = useState(now.getMonth())
  const [currentYear, setCurrentYear] = useState(now.getFullYear())
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState("")

  const daysInMonth = useMemo(
    () => getDaysInMonth(currentYear, currentMonth),
    [currentYear, currentMonth]
  )
  const firstDay = useMemo(
    () => getFirstDayOfMonth(currentYear, currentMonth),
    [currentYear, currentMonth]
  )

  function prevMonth() {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
    setSelectedDate(null)
    setSelectedTime("")
  }

  function nextMonth() {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
    setSelectedDate(null)
    setSelectedTime("")
  }

  function isPast(day: number) {
    const date = new Date(currentYear, currentMonth, day)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  function isWeekend(day: number) {
    const date = new Date(currentYear, currentMonth, day)
    return date.getDay() === 0
  }

  const isComplete = selectedDate && selectedTime

  function buildMessage() {
    return `https://wa.me/5492644726549?text=Hola ELCATEC!%20Quiero%20agendar%20una%20visita%20técnica.%0AFecha:%20${selectedDate}%20de%20${MONTHS[currentMonth]}%20${currentYear}%0AHorario:%20${selectedTime}`
  }

  return (
    <section id="agenda" className="relative py-24 scroll-mt-20">
      <div className="absolute inset-0 bg-secondary/50 circuit-pattern" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Agendá tu visita
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight text-balance">
            Reservá tu visita técnica presencial
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Selecciona fecha y horario disponible. Te confirmamos por WhatsApp.
          </p>
        </div>

        {/* Pricing card */}
        <div className="rounded-2xl border border-primary/20 bg-card p-6 sm:p-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-1">Visita técnica presencial</p>
              <p className="text-3xl font-bold text-primary">
                $30.000
              </p>
            </div>
            <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary w-fit">
              Precio fijo
            </span>
          </div>

          <p className="text-sm font-semibold text-card-foreground mb-3">
            La visita incluye:
          </p>
          <ul className="grid sm:grid-cols-2 gap-2 mb-6">
            {[
              "Revisión del estado de la instalación",
              "Diagnóstico del problema, si lo hubiera",
              "Sugerencias personalizadas al cliente",
              "Cotización detallada del trabajo",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CircleCheck className="size-4 shrink-0 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="rounded-xl bg-accent/20 border border-accent/30 p-4">
            <div className="flex gap-3">
              <Info className="size-5 shrink-0 text-primary mt-0.5" />
              <div className="flex flex-col gap-2 text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-card-foreground">Si aceptás el trabajo en el momento:</strong>{" "}
                  el costo de la visita se descuenta del total. Por ejemplo, si el trabajo cotizado sale $50.000 y lo aceptás en el acto, solo pagás $20.000 adicionales.
                </p>
                <p>
                  <strong className="text-card-foreground">Si solo necesitás la visita:</strong>{" "}
                  abonás los $30.000 de la visita y, si decidís hacer el trabajo otro día, se te informa el valor actualizado en ese momento.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          {/* Calendar header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={prevMonth}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground hover:border-primary/30 transition-colors"
              aria-label="Mes anterior"
            >
              <ChevronLeft className="size-4" />
            </button>
            <div className="flex items-center gap-2">
              <CalendarDays className="size-5 text-primary" />
              <span className="font-semibold text-card-foreground">
                {MONTHS[currentMonth]} {currentYear}
              </span>
            </div>
            <button
              onClick={nextMonth}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground hover:border-primary/30 transition-colors"
              aria-label="Mes siguiente"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {DAYS.map((d) => (
              <div
                key={d}
                className="text-center text-xs font-medium text-muted-foreground py-2"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="grid grid-cols-7 gap-1 mb-6">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1
              const past = isPast(day)
              const weekend = isWeekend(day)
              const disabled = past || weekend
              const selected = selectedDate === day

              return (
                <button
                  key={day}
                  disabled={disabled}
                  onClick={() => {
                    setSelectedDate(day)
                    setSelectedTime("")
                  }}
                  className={`h-10 rounded-lg text-sm font-medium transition-all ${
                    disabled
                      ? "text-muted-foreground/30 cursor-not-allowed"
                      : selected
                        ? "bg-primary text-primary-foreground"
                        : "text-card-foreground hover:bg-primary/10"
                  }`}
                >
                  {day}
                </button>
              )
            })}
          </div>

          {/* Time slots */}
          {selectedDate && (
            <div className="flex flex-col gap-3 mb-6">
              <p className="text-sm font-medium text-card-foreground">
                Horarios disponibles para el {selectedDate} de{" "}
                {MONTHS[currentMonth]}:
              </p>
              <div className="grid grid-cols-4 gap-2">
                {TIME_SLOTS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`rounded-lg border px-3 py-2 text-sm transition-all ${
                      selectedTime === t
                        ? "border-primary bg-primary/10 text-card-foreground font-medium"
                        : "border-border bg-secondary/50 text-card-foreground hover:border-primary/30"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          <Button
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12"
            disabled={!isComplete}
            asChild={isComplete ? true : undefined}
          >
            {isComplete ? (
              <a href={buildMessage()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-5 mr-2" />
                Confirmar por WhatsApp
              </a>
            ) : (
              <span>Seleccioná fecha y horario</span>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}
