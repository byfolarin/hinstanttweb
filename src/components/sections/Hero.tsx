import { useEffect, useRef, useState, type CSSProperties } from "react"
import { createPortal } from "react-dom"
import heroVideo from "../../assets/hero-commerce-technology-web.mp4"
import { hero } from "../../content/site"

const rotatingHeroWords = ["money", "payments", "commerce", "treasury", "businesses"]

function StaggeredWords({ text, offset = 0, className = "" }: { text: string; offset?: number; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((word, index) => (
        <span key={`${word}-${index}`} className="stagger-word inline-block" style={{ "--word-index": index + offset } as CSSProperties}>
          {word}{index < text.split(" ").length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </span>
  )
}

function GridRotatingWord({ active }: { active: boolean }) {
  const [wordIndex, setWordIndex] = useState(0)
  const rotatedRef = useRef(false)

  useEffect(() => {
    if (!active) return
    const interval = window.setInterval(() => {
      rotatedRef.current = true
      setWordIndex((current) => (current + 1) % rotatingHeroWords.length)
    }, 3200)
    return () => window.clearInterval(interval)
  }, [active])

  const word = rotatingHeroWords[wordIndex]

  return (
    <span className="hero-rotating-word" aria-live="polite" aria-atomic="true">
      <span className="sr-only">{word}</span>
      <span
        key={word}
        className={`hero-word-grid${rotatedRef.current ? " hero-word-grid--rotate" : ""}`}
        aria-hidden="true"
      >
        {word.split("").map((character, index) => (
          <span
            key={`${word}-${index}`}
            className="hero-word-column"
            style={{ "--letter-index": index } as CSSProperties}
          >
            {character}
          </span>
        ))}
      </span>
    </span>
  )
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const [pageReady, setPageReady] = useState(false)
  const [loaderExiting, setLoaderExiting] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)
  const [loaderVisible, setLoaderVisible] = useState(true)

  useEffect(() => {
    const previousScrollRestoration = history.scrollRestoration
    history.scrollRestoration = "manual"
    window.scrollTo(0, 0)
    return () => {
      history.scrollRestoration = previousScrollRestoration
    }
  }, [])

  useEffect(() => {
    const markPageReady = () => setPageReady(true)
    if (document.readyState === "complete") markPageReady()
    else window.addEventListener("load", markPageReady, { once: true })
    return () => window.removeEventListener("load", markPageReady)
  }, [])

  useEffect(() => {
    document.body.style.overflow = loaderVisible ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [loaderVisible])

  useEffect(() => {
    if (!videoReady || !pageReady) return
    const revealTimeout = window.setTimeout(() => setLoaderExiting(true), 1200)
    const removeTimeout = window.setTimeout(() => setLoaderVisible(false), 3000)
    return () => {
      window.clearTimeout(revealTimeout)
      window.clearTimeout(removeTimeout)
    }
  }, [pageReady, videoReady])

  useEffect(() => {
    if (!loaderExiting || !videoRef.current) return
    videoRef.current.currentTime = 0
    void videoRef.current.play()
    const contentTimeout = window.setTimeout(() => setContentVisible(true), 2200)
    return () => window.clearTimeout(contentTimeout)
  }, [loaderExiting])

  return (
    <div className="bg-white px-2 pt-2 sm:px-3 sm:pt-3">
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden rounded-[20px] bg-white text-white sm:rounded-[30px]">
      {loaderVisible && createPortal(
        <div className={`pixel-loader fixed inset-0 z-[100] grid grid-cols-12 bg-white ${loaderExiting ? "pixel-loader-exit" : ""}`} aria-label="Loading Hinstantt" role="status">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} className="pixel-loader-column bg-white" style={{ "--column-index": index } as CSSProperties} />
          ))}
        </div>
      , document.body)}

      <div className={`hero-stage relative isolate min-h-[100svh] ${loaderExiting ? "hero-stage-active" : ""}`}>
      <video
        ref={videoRef}
        className="absolute inset-0 -z-20 size-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        onCanPlay={() => setVideoReady(true)}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,8,10,.48)_0%,rgba(6,8,12,.56)_52%,rgba(4,6,10,.84)_100%)]" />

      <div className="mx-auto flex min-h-[100svh] w-full max-w-[1600px] flex-col px-4 min-[390px]:px-5 sm:px-8 lg:px-16 xl:px-24 2xl:px-28">
        <div className={`hero-copy relative flex flex-1 flex-col items-start justify-end pb-[clamp(2.25rem,8svh,7rem)] pt-[clamp(5.5rem,13svh,9rem)] text-left ${contentVisible ? "hero-copy-active" : ""}`}>
          <p className="mb-3 text-[11px] font-medium italic leading-snug tracking-[.035em] text-white/75 min-[390px]:text-xs sm:mb-5 sm:text-sm">
            <StaggeredWords text={hero.eyebrow} offset={6} />
          </p>

          <h1 className="max-w-full font-display text-[clamp(1.9rem,min(8vw,11svh),6rem)] font-normal leading-[.94] tracking-[-.048em] sm:leading-[.92]">
            <StaggeredWords text={hero.headline[0]} className="block whitespace-nowrap" />
            <span className="block whitespace-nowrap">
              <StaggeredWords text="for global" offset={3} />{" "}
              <span className="stagger-word inline-block" style={{ "--word-index": 5 } as CSSProperties}>
                <GridRotatingWord active={contentVisible} />
              </span>
            </span>
          </h1>

          <p className="mt-4 max-w-[42rem] text-balance text-[14px] leading-[1.55] text-white/82 min-[390px]:text-[15px] sm:mt-6 sm:text-lg lg:mt-7 lg:text-xl">
            <StaggeredWords text={hero.body} offset={9} />
          </p>

          <div className="hero-actions mt-5 flex w-full flex-col items-start gap-3 sm:mt-7 lg:mt-8">
            <form action="#demo" className="flex h-[52px] w-full max-w-[470px] items-center rounded-full bg-white p-1 pl-4 shadow-[0_12px_40px_rgba(0,0,0,.18)] min-[390px]:pl-5 sm:h-[58px] sm:p-1.5 sm:pl-6" onSubmit={(event) => { event.preventDefault(); document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" }) }}>
              <label htmlFor="hero-work-email" className="sr-only">Work email</label>
              <input id="hero-work-email" name="email" type="email" required autoComplete="email" placeholder="Enter your work email" className="min-w-0 flex-1 bg-transparent text-[13px] text-navy placeholder:text-navy/45 focus:outline-none min-[390px]:text-sm sm:text-[15px]" />
              <button type="submit" className="inline-flex h-[44px] shrink-0 items-center gap-1.5 rounded-full bg-navy px-4 text-[12px] font-semibold text-white transition-colors hover:bg-navy-700 min-[390px]:px-5 sm:h-[46px] sm:gap-2 sm:px-6 sm:text-[13px]">
                Get started <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>
        </div>

      </div>
      </div>
    </section>
    </div>
  )
}
