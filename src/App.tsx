import { Nav } from "./components/layout/Nav"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { LogoWall } from "./components/sections/LogoWall"
import { Manifesto } from "./components/sections/Manifesto"
import { Trust } from "./components/sections/Trust"
import { Platform } from "./components/sections/Platform"
import { Testimonials } from "./components/sections/Testimonials"
import { Security } from "./components/sections/Security"
import { InvestorLogos } from "./components/sections/InvestorLogos"
import { ProductPage } from "./components/pages/ProductPage"
import { CorporateCardsPage } from "./components/pages/CorporateCardsPage"

export default function App() {
  const productMatch = window.location.pathname.match(/^\/products\/([^/]+)\/?$/)
  if (productMatch?.[1] === "corporate-cards") return <CorporateCardsPage />
  if (productMatch) return <ProductPage slug={productMatch[1]} />
  return (
    <>
      <Nav />
      <main className="homepage-content">
        <Hero />
        <InvestorLogos />
        <LogoWall />
        <Manifesto />
        <Trust />
        <Platform />
        <Testimonials />
        <Security />
      </main>
      <Footer />
    </>
  )
}
