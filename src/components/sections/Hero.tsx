import { useEffect, useRef, useState, type CSSProperties } from "react"
import { createPortal } from "react-dom"
import heroVideo from "../../assets/hero-commerce-web.mp4"
import { hero } from "../../content/site"

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
    <section id="top" className="relative isolate min-h-screen overflow-hidden rounded-[24px] bg-white text-white sm:rounded-[30px]">
      {loaderVisible && createPortal(
        <div className={`pixel-loader fixed inset-0 z-[100] grid grid-cols-12 bg-white ${loaderExiting ? "pixel-loader-exit" : ""}`} aria-label="Loading Hinstantt" role="status">
          {Array.from({ length: 12 }).map((_, index) => (
            <span key={index} className="pixel-loader-column bg-white" style={{ "--column-index": index } as CSSProperties} />
          ))}
        </div>
      , document.body)}

      <div className={`hero-stage relative isolate min-h-screen ${loaderExiting ? "hero-stage-active" : ""}`}>
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

      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-5 sm:px-8 lg:px-10">
        <div className={`hero-copy relative flex flex-1 -translate-y-12 flex-col items-center justify-center pb-12 pt-24 text-center sm:pb-16 lg:-translate-y-16 ${contentVisible ? "hero-copy-active" : ""}`}>
          <p className="mb-5 text-[13px] font-semibold uppercase tracking-[.16em] text-white/75 sm:text-sm">
            <StaggeredWords text={hero.eyebrow} offset={6} />
          </p>

          <h1 className="max-w-[1100px] text-balance font-display text-[clamp(3.4rem,7.6vw,7.25rem)] font-normal leading-[.9] tracking-[-.055em]">
            {hero.headline.map((line, index) => (
              <StaggeredWords key={line} text={line} offset={index * 3} className="block" />
            ))}
          </h1>

          <p className="mt-7 max-w-[680px] text-balance text-[17px] leading-relaxed text-white/82 sm:text-xl">
            <StaggeredWords text={hero.body} offset={9} />
          </p>

          <div className="hero-actions mt-8 flex flex-col items-center gap-3">
            <form action="#demo" className="flex h-[58px] w-[min(100%,470px)] items-center rounded-full bg-white p-1.5 pl-6 shadow-[0_12px_40px_rgba(0,0,0,.18)]" onSubmit={(event) => { event.preventDefault(); document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" }) }}>
              <label htmlFor="hero-work-email" className="sr-only">Work email</label>
              <input id="hero-work-email" name="email" type="email" required autoComplete="email" placeholder="Enter your work email" className="min-w-0 flex-1 bg-transparent text-[15px] text-navy placeholder:text-navy/45 focus:outline-none" />
              <button type="submit" className="inline-flex h-[46px] shrink-0 items-center gap-2 rounded-full bg-navy px-5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-700 sm:px-6">
                Get started <span aria-hidden="true">↗</span>
              </button>
            </form>
          </div>
        </div>

        <div className="relative mx-auto w-[calc(100%_-_32px)] max-w-[900px] rounded-t-[28px] bg-white px-4 pb-5 pt-6 text-navy sm:px-8 sm:pb-6 sm:pt-7 lg:px-10">
          <span aria-hidden="true" className="metric-notch-left absolute -left-3 bottom-0 size-3" />
          <span aria-hidden="true" className="metric-notch-right absolute -right-3 bottom-0 size-3" />
          <div className={`hero-metrics grid grid-cols-2 gap-x-5 gap-y-6 lg:grid-cols-4 lg:gap-x-8 ${contentVisible ? "hero-metrics-active" : ""}`}>
            {hero.metrics.map((metric, index) => (
              <div key={metric.label} style={{ "--metric-index": index } as CSSProperties} className={`relative text-center lg:text-left ${index > 0 ? "lg:before:absolute lg:before:-left-4 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-navy/12" : ""}`}>
                <p className="font-display text-[1.75rem] leading-none tracking-[-.045em] lg:text-[2.15rem]">{metric.value}</p>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[.1em] text-navy/50 lg:text-xs">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
    </div>
  )
}
