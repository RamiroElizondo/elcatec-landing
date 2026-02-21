import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight, Instagram, Image } from "lucide-react"

export function WhatsAppCTA() {
  return (
    <section id="contacto" className="relative py-24 scroll-mt-20 overflow-hidden">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[200px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            Seguinos
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight text-balance">
            Mira nuestros trabajos y escribinos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Conoce los trabajos que realizamos en nuestras redes y contactanos para coordinar el tuyo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* WhatsApp card */}
          <div className="group relative rounded-2xl border border-whatsapp/20 bg-card p-8 flex flex-col items-center gap-5 text-center transition-all hover:border-whatsapp/40 hover:bg-whatsapp/5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-whatsapp/10 transition-transform group-hover:scale-110">
              <MessageCircle className="size-8 text-whatsapp" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground">WhatsApp</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Escribinos para coordinar tu trabajo, pedir presupuesto o consultar cualquier duda. Te respondemos en menos de 1 hora.
            </p>
            <Button
              size="lg"
              className="bg-whatsapp text-foreground hover:bg-whatsapp/90 px-8 h-12 mt-auto"
              asChild
            >
              <a
                href="https://wa.me/5492644726549?text=Hola%20ELCATEC!%20Quiero%20coordinar%20un%20servicio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5 mr-2" />
                Escribir por WhatsApp
                <ArrowRight className="size-4 ml-2" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Lunes a Sabado de 8 a 20hs
            </p>
          </div>

          {/* Instagram card */}
          <div className="group relative rounded-2xl border border-pink-500/20 bg-card p-8 flex flex-col items-center gap-5 text-center transition-all hover:border-pink-500/40 hover:bg-pink-500/5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-500/10 transition-transform group-hover:scale-110">
              <Instagram className="size-8 text-pink-500" />
            </div>
            <h3 className="text-xl font-bold text-card-foreground">Instagram</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Mira fotos y videos de nuestros trabajos terminados, instalaciones reales y el antes/despues de cada proyecto.
            </p>
            <Button
              size="lg"
              className="bg-pink-500 text-foreground hover:bg-pink-500/90 px-8 h-12 mt-auto"
              asChild
            >
              <a
                href="https://instagram.com/elcatec"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image className="size-5 mr-2" />
                Ver nuestros trabajos
                <ArrowRight className="size-4 ml-2" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground">
              Fotos y videos de trabajos reales
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
