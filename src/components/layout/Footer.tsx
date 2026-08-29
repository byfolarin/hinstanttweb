import { useEffect, useRef } from "react"
import { Container } from "../ui/Container"
import { brand, footer } from "../../content/site"
import logo from "../../assets/hinstanttlogo.png"
import logoType from "../../assets/logo-mark.svg"
import { productSlugByName } from "../../content/products"

type LogoPoint = { x: number; y: number; phase: number }

function DitherLogo() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    if (!wrap || !canvas) return

    const context = canvas.getContext("2d")
    if (!context) return

    const source = new Image()
    const pointer = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 }
    const points: LogoPoint[] = []
    let frame = 0
    let cssWidth = 0
    let cssHeight = 0
    let cell = 5
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const rebuild = () => {
      const rect = wrap.getBoundingClientRect()
      cssWidth = Math.max(1, rect.width)
      cssHeight = Math.max(1, rect.height)
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(cssWidth * ratio)
      canvas.height = Math.round(cssHeight * ratio)
      canvas.style.width = `${cssWidth}px`
      canvas.style.height = `${cssHeight}px`
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      cell = cssWidth < 640 ? 3 : cssWidth < 1100 ? 4 : 5

      if (!source.complete || !source.naturalWidth) return
      const sampler = document.createElement("canvas")
      sampler.width = Math.ceil(cssWidth)
      sampler.height = Math.ceil(cssHeight)
      const sampleContext = sampler.getContext("2d", { willReadFrequently: true })
      if (!sampleContext) return

      const scale = Math.min(cssWidth / source.naturalWidth, cssHeight / source.naturalHeight)
      const width = source.naturalWidth * scale
      const height = source.naturalHeight * scale
      sampleContext.drawImage(source, (cssWidth - width) / 2, (cssHeight - height) / 2, width, height)
      const pixels = sampleContext.getImageData(0, 0, sampler.width, sampler.height).data
      points.length = 0

      for (let y = cell / 2; y < cssHeight; y += cell) {
        for (let x = cell / 2; x < cssWidth; x += cell) {
          const alpha = pixels[(Math.floor(y) * sampler.width + Math.floor(x)) * 4 + 3]
          if (alpha > 90) points.push({ x, y, phase: ((x / cell) * 3 + (y / cell) * 5) % 8 })
        }
      }
    }

    const render = (time = 0) => {
      pointer.x += (pointer.targetX - pointer.x) * .14
      pointer.y += (pointer.targetY - pointer.y) * .14
      context.clearRect(0, 0, cssWidth, cssHeight)
      context.fillStyle = "white"

      const radius = Math.min(170, cssWidth * .16)
      for (const point of points) {
        const dx = point.x - pointer.x
        const dy = point.y - pointer.y
        const distance = Math.hypot(dx, dy)
        const influence = Math.max(0, 1 - distance / radius)
        const eased = influence * influence * (3 - 2 * influence)
        const wave = reducedMotion ? 0 : Math.sin(distance * .085 - time * .006 + point.phase) * eased
        const length = distance || 1
        const displacement = wave * 7
        const x = point.x + (dx / length) * displacement
        const y = point.y + (dy / length) * displacement
        const ordered = ((point.phase * 1.7) % 5) / 5
        const size = Math.max(1, cell * (.46 + ordered * .22 + eased * .34))
        context.globalAlpha = .46 + ordered * .28 + eased * .26
        context.fillRect(Math.round(x - size / 2), Math.round(y - size / 2), size, size)
      }
      context.globalAlpha = 1
      if (!reducedMotion) frame = window.requestAnimationFrame(render)
    }

    const onMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect()
      pointer.targetX = event.clientX - rect.left
      pointer.targetY = event.clientY - rect.top
    }
    const onLeave = () => {
      pointer.targetX = -1000
      pointer.targetY = -1000
    }

    const observer = new ResizeObserver(() => {
      rebuild()
      if (reducedMotion) render()
    })
    source.onload = () => {
      rebuild()
      if (reducedMotion) render()
    }
    source.src = logoType
    observer.observe(wrap)
    wrap.addEventListener("pointermove", onMove)
    wrap.addEventListener("pointerleave", onLeave)
    if (!reducedMotion) frame = window.requestAnimationFrame(render)

    return () => {
      observer.disconnect()
      wrap.removeEventListener("pointermove", onMove)
      wrap.removeEventListener("pointerleave", onLeave)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div ref={wrapRef} className="relative aspect-[106/16] w-full cursor-crosshair" aria-label="Hinstantt">
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 size-full" />
    </div>
  )
}

export function Footer() {
  return (
    <footer className="overflow-hidden bg-navy text-white">
      <Container>
        <div className="grid py-14 sm:py-20 lg:grid-cols-[1.05fr_1.95fr]">
          <div className="border-white/15 pb-12 lg:border-r lg:pb-0 lg:pr-12">
            <a href="#top" className="inline-flex items-center gap-3" aria-label={`${brand.name} home`}>
              <span className="grid size-11 place-items-center overflow-hidden rounded-xl bg-cream"><img src={logo} alt="" className="size-8 object-contain" /></span>
              <span className="font-display text-xl tracking-[-.03em]">{brand.name}</span>
            </a>
            <p className="mt-6 max-w-[330px] text-sm leading-6 text-white/50">{footer.blurb}</p>
            <div className="mt-9 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.14em] text-white/40"><span className="size-2 rounded-full bg-emerald-400" /> All systems operational</div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 pt-12 sm:grid-cols-4 lg:pl-14 lg:pt-0">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-white/35">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((link) => <li key={link}><a href={productSlugByName[link] ? `/products/${productSlugByName[link]}` : link === "About Us" ? "/about" : link === "Contact" ? "/contact" : "#"} className="text-sm text-white/68 transition-colors hover:text-white">{link}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <a href="#top" aria-label={`${brand.name} home`} className="block overflow-hidden border-y border-white/15 py-8 sm:py-12">
          <DitherLogo />
        </a>

        <div className="flex flex-col gap-5 py-7 text-[11px] text-white/38 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="mailto:newbusiness@hinstantt.com" className="transition-colors hover:text-white">newbusiness@hinstantt.com</a>
            {footer.legal.map((item) => <a key={item} href="#" className="transition-colors hover:text-white">{item}</a>)}
          </div>
          <a href="#top" className="inline-flex items-center gap-2 uppercase tracking-[.12em] transition-colors hover:text-white">Back to top <span>↑</span></a>
        </div>
      </Container>
    </footer>
  )
}
