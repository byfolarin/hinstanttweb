import { useEffect, useRef } from "react"
import icon from "../../assets/card-icon.svg"
import bankIcon from "../../assets/bank-icon.svg"
import operateIcon from "../../assets/operate-icon.svg"
import intelligenceIcon from "../../assets/intelligence-icon.svg"

type Point = { x: number; y: number; phase: number; intensity: number; edge: boolean }

type Shape = "card" | "bank" | "operate" | "intelligence"

export function DitherIcon({ active = "card" }: { active?: Shape }) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const activeRef = useRef(active)
  useEffect(() => { activeRef.current = active }, [active])

  useEffect(() => {
    const wrap = wrapRef.current
    const canvas = canvasRef.current
    const context = canvas?.getContext("2d")
    if (!wrap || !canvas || !context) return

    const source = new Image()
    const bankSource = new Image()
    const operateSource = new Image()
    const intelligenceSource = new Image()
    const points: Point[] = []
    const bankPoints: Point[] = []
    const operatePoints: Point[] = []
    const intelligencePoints: Point[] = []
    const pointer = { x: -800, y: -800, targetX: -800, targetY: -800 }
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let frame = 0
    let width = 1
    let height = 1
    let cell = 5
    const shapeIndex = (shape: Shape) => ({ card: 0, bank: 1, operate: 2, intelligence: 3 })[shape]
    let shownShape = shapeIndex(activeRef.current)
    let previousShape = shownShape
    let morph = 1

    const rebuild = () => {
      const rect = wrap.getBoundingClientRect()
      width = Math.max(1, rect.width)
      height = Math.max(1, rect.height)
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      cell = width < 300 ? 5 : width < 600 ? 7 : 8
      if (![source, bankSource, operateSource, intelligenceSource].every((image) => image.complete && image.naturalWidth)) return

      const sample = (image: HTMLImageElement) => {
        const sampler = document.createElement("canvas")
        sampler.width = Math.ceil(width); sampler.height = Math.ceil(height)
        const sampleContext = sampler.getContext("2d", { willReadFrequently: true })!
        const scale = Math.min(width / image.naturalWidth, height / image.naturalHeight) * .91
        const imageWidth = image.naturalWidth * scale, imageHeight = image.naturalHeight * scale
        sampleContext.drawImage(image, (width - imageWidth) / 2, (height - imageHeight) / 2, imageWidth, imageHeight)
        const pixels = sampleContext.getImageData(0, 0, sampler.width, sampler.height).data
        const sampled: Point[] = []
      for (let y = cell / 2; y < height; y += cell) {
        for (let x = cell / 2; x < width; x += cell) {
          const alpha = pixels[(Math.floor(y) * sampler.width + Math.floor(x)) * 4 + 3]
          if (alpha > 30) {
            const rightX = Math.min(sampler.width - 1, Math.floor(x + cell * 1.5))
            const leftX = Math.max(0, Math.floor(x - cell * 1.5))
            const lowerY = Math.min(sampler.height - 1, Math.floor(y + cell * 1.5))
            const upperY = Math.max(0, Math.floor(y - cell * 1.5))
            const rightAlpha = pixels[(Math.floor(y) * sampler.width + rightX) * 4 + 3]
            const leftAlpha = pixels[(Math.floor(y) * sampler.width + leftX) * 4 + 3]
            const lowerAlpha = pixels[(lowerY * sampler.width + Math.floor(x)) * 4 + 3]
            const upperAlpha = pixels[(upperY * sampler.width + Math.floor(x)) * 4 + 3]
            sampled.push({
              x,
              y,
              phase: ((x / cell) * 3 + (y / cell) * 5) % 8,
              intensity: alpha / 255,
              edge: rightAlpha < 30 || leftAlpha < 30 || lowerAlpha < 30 || upperAlpha < 30,
            })
          }
        }
      }
        sampled.sort((a, b) => Math.atan2(a.y - height / 2, a.x - width / 2) - Math.atan2(b.y - height / 2, b.x - width / 2) || Math.hypot(a.x - width / 2, a.y - height / 2) - Math.hypot(b.x - width / 2, b.y - height / 2))
        return sampled
      }
      const cardSample = sample(source), bankSample = sample(bankSource), operateSample = sample(operateSource), intelligenceSample = sample(intelligenceSource)
      points.length = 0; bankPoints.length = 0; operatePoints.length = 0; intelligencePoints.length = 0
      const count = Math.max(cardSample.length, bankSample.length, operateSample.length, intelligenceSample.length)
      for (let i = 0; i < count; i++) {
        points.push(cardSample[Math.floor(i * cardSample.length / count)])
        bankPoints.push(bankSample[Math.floor(i * bankSample.length / count)])
        operatePoints.push(operateSample[Math.floor(i * operateSample.length / count)])
        intelligencePoints.push(intelligenceSample[Math.floor(i * intelligenceSample.length / count)])
      }
    }

    const render = (time = 0) => {
      const requestedShape = shapeIndex(activeRef.current)
      if (requestedShape !== shownShape) {
        previousShape = shownShape
        shownShape = requestedShape
        morph = 0
      }
      morph += (1 - morph) * .055
      const morphEase = morph * morph * (3 - 2 * morph)
      pointer.x += (pointer.targetX - pointer.x) * .14
      pointer.y += (pointer.targetY - pointer.y) * .14
      context.clearRect(0, 0, width, height)
      context.fillStyle = "white"
      const radius = Math.min(175, width * .42)
      const centerX = width / 2
      const centerY = height / 2
      const rotateZ = -.29 + (reducedMotion ? 0 : Math.sin(time * .00032) * .018)
      const restingAngle = -.68
      const spinDuration = 2600
      const cycleDuration = 6800
      const cycleTime = time % cycleDuration
      const spinProgress = Math.min(1, cycleTime / spinDuration)
      const easedSpin = spinProgress < .5
        ? 4 * spinProgress * spinProgress * spinProgress
        : 1 - Math.pow(-2 * spinProgress + 2, 3) / 2
      const rotateY = reducedMotion ? restingAngle : restingAngle + easedSpin * Math.PI * 2
      const rotateX = .24 + (reducedMotion ? 0 : Math.sin(time * .0003) * .035)
      const cosZ = Math.cos(rotateZ)
      const sinZ = Math.sin(rotateZ)
      const cosY = Math.cos(rotateY)
      const sinY = Math.sin(rotateY)
      const cosX = Math.cos(rotateX)
      const sinX = Math.sin(rotateX)

      const project = (point: Point, addedDepth = 0) => {
        const localX = point.x - centerX
        const localY = point.y - centerY
        const cursorDx = point.x - pointer.x
        const cursorDy = point.y - pointer.y
        const distance = Math.hypot(cursorDx, cursorDy)
        const influence = Math.max(0, 1 - distance / radius)
        const eased = influence * influence * (3 - 2 * influence)
        const interactionDepth = (reducedMotion ? 0 : Math.sin(distance * .075 - time * .005 + point.phase * .3) * eased * 34) + addedDepth

        const zX = localX * cosZ - localY * sinZ
        const zY = localX * sinZ + localY * cosZ
        const xY = zX
        const xHeight = zY * cosX - interactionDepth * sinX
        const xDepth = zY * sinX + interactionDepth * cosX
        const rotatedX = xY * cosY + xDepth * sinY
        const depth = -xY * sinY + xDepth * cosY
        const perspective = 850 / (850 + depth)
        const projectedX = centerX + rotatedX * perspective
        const projectedY = centerY + xHeight * perspective
        return { projectedX, projectedY, perspective, eased }
      }

      // A complete rear face keeps the card solid when the spin exposes its back.
      const shapes = [points, bankPoints, operatePoints, intelligencePoints]
      const fromPoints = shapes[previousShape] || points
      const toPoints = shapes[shownShape] || points
      const displayPoints = toPoints.map((point, index) => {
        const from = fromPoints[index] || point
        return { x: from.x + (point.x - from.x) * morphEase, y: from.y + (point.y - from.y) * morphEase, phase: point.phase, intensity: from.intensity + (point.intensity - from.intensity) * morphEase, edge: from.edge || point.edge }
      })
      context.fillStyle = "rgba(68, 84, 109, .98)"
      for (const point of displayPoints) {
        const { projectedX, projectedY, perspective } = project(point, 67)
        context.globalAlpha = .72
        context.beginPath()
        context.arc(projectedX, projectedY, Math.max(1.1, cell * .42 * perspective), 0, Math.PI * 2)
        context.fill()
      }

      // Connect front and rear faces with dotted side walls.
      for (let layer = 14; layer >= 1; layer--) {
        context.fillStyle = layer < 4 ? "rgba(104, 122, 149, .96)" : "rgba(47, 62, 84, .96)"
        for (const point of displayPoints) {
          if (!point.edge) continue
          const { projectedX, projectedY, perspective } = project(point, layer * 4.8)
          context.globalAlpha = .46 + layer * .025
          context.beginPath()
          context.arc(projectedX, projectedY, Math.max(1.2, cell * .42 * perspective), 0, Math.PI * 2)
          context.fill()
        }
      }

      context.fillStyle = "rgb(126, 143, 169)"
      const glimmerPosition = (time * .3) % (width * 1.7) - width * .35
      for (const point of displayPoints) {
        const { projectedX, projectedY, perspective, eased } = project(point)
        const size = Math.max(1.2, cell * (.42 + point.intensity * .38 + ((point.phase * 1.7) % 5) / 20 + eased * .3) * perspective)
        const glimmerDistance = Math.abs(projectedX + projectedY * .38 - glimmerPosition)
        const glimmer = Math.max(0, 1 - glimmerDistance / Math.max(28, width * .055))
        context.fillStyle = glimmer > 0
          ? `rgb(${Math.round(126 + glimmer * 105)}, ${Math.round(143 + glimmer * 93)}, ${Math.round(169 + glimmer * 70)})`
          : "rgb(126, 143, 169)"
        context.globalAlpha = Math.min(1, .28 + point.intensity * .58 + eased * .2 + (1 - perspective) * .16 + glimmer * .22)
        context.beginPath()
        context.arc(projectedX, projectedY, size * .48, 0, Math.PI * 2)
        context.fill()
      }
      context.globalAlpha = 1
      if (!reducedMotion) frame = window.requestAnimationFrame(render)
    }

    const onMove = (event: PointerEvent) => {
      const rect = wrap.getBoundingClientRect()
      pointer.targetX = event.clientX - rect.left
      pointer.targetY = event.clientY - rect.top
    }
    const onLeave = () => { pointer.targetX = -800; pointer.targetY = -800 }
    const observer = new ResizeObserver(() => { rebuild(); if (reducedMotion) render() })
    source.onload = () => { rebuild(); if (reducedMotion) render() }
    bankSource.onload = () => { rebuild(); if (reducedMotion) render() }
    operateSource.onload = () => { rebuild(); if (reducedMotion) render() }
    intelligenceSource.onload = () => { rebuild(); if (reducedMotion) render() }
    source.src = icon
    bankSource.src = bankIcon
    operateSource.src = operateIcon
    intelligenceSource.src = intelligenceIcon
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
    <div ref={wrapRef} className="relative aspect-[4/3] w-full cursor-crosshair [perspective:1100px]" aria-label="Three-dimensional spend card">
      <canvas ref={canvasRef} className="absolute inset-0 size-full" aria-hidden="true" />
    </div>
  )
}
