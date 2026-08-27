import { Nav } from "./components/layout/Nav"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { LogoWall } from "./components/sections/LogoWall"
import { Manifesto } from "./components/sections/Manifesto"
import { Trust } from "./components/sections/Trust"
import { Platform } from "./components/sections/Platform"
import { Testimonials } from "./components/sections/Testimonials"
import { Security } from "./components/sections/Security"
import { GradientBridge } from "./components/sections/GradientBridge"
import { GlassMotion } from "./components/sections/GlassMotion"

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoWall />
        <GlassMotion />
        <Manifesto />
        <Trust />
        <Platform />
        <Testimonials />
        <Security />
        <GradientBridge />
      </main>
      <Footer />
    </>
  )
}
