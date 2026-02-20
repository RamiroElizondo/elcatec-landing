import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Pricing } from "@/components/pricing"
import { QuoteCalculator } from "@/components/quote-calculator"
import { QuoteModalities } from "@/components/quote-modalities"
import { Emergency } from "@/components/emergency"
import { ServicePackages } from "@/components/service-packages"
import { Trust } from "@/components/trust"
import { Booking } from "@/components/booking"
import { PaymentMethods } from "@/components/payment-methods"
import { WhatsAppCTA } from "@/components/whatsapp-cta"
import { Footer } from "@/components/footer"
import { WhatsAppFAB } from "@/components/whatsapp-fab"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Pricing />
      <QuoteCalculator />
      <QuoteModalities />
      <Emergency />
      <ServicePackages />
      <Trust />
      <Booking />
      <PaymentMethods />
      <WhatsAppCTA />
      <Footer />
      <WhatsAppFAB />
    </main>
  )
}
