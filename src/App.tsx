import { Nav } from "./components/layout/Nav"
import { Footer } from "./components/layout/Footer"
import { Hero } from "./components/sections/Hero"
import { LogoWall } from "./components/sections/LogoWall"
import { Manifesto } from "./components/sections/Manifesto"
import { Trust } from "./components/sections/Trust"
import { Platform } from "./components/sections/Platform"
import { Testimonials } from "./components/sections/Testimonials"
import { Personas } from "./components/sections/Personas"
import { Security } from "./components/sections/Security"
import { Ratings } from "./components/sections/Ratings"
import { DemoForm } from "./components/sections/DemoForm"

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <LogoWall />
        <Manifesto />
        <Trust />
        <Platform />
        <Testimonials />
        <Personas />
        <Security />
        <Ratings />
        <DemoForm />
      </main>
      <Footer />
    </>
  )
}
