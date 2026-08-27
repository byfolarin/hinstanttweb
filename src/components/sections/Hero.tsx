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

      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-5 sm:px-8 lg:px-28 xl:px-32">
        <div className={`hero-copy relative flex flex-1 flex-col items-start justify-end pb-20 pt-28 text-left sm:pb-24 lg:pb-28 ${contentVisible ? "hero-copy-active" : ""}`}>
          <p className="mb-5 text-[13px] font-medium italic tracking-[.04em] text-white/75 sm:text-sm">
            <StaggeredWords text={hero.eyebrow} offset={6} />
          </p>

          <h1 className="max-w-[980px] text-balance font-display text-[clamp(3.4rem,7.6vw,7.25rem)] font-normal leading-[.9] tracking-[-.055em]">
            {hero.headline.map((line, index) => (
              <StaggeredWords key={line} text={line} offset={index * 3} className="block sm:whitespace-nowrap" />
            ))}
          </h1>

          <p className="mt-7 max-w-[650px] text-balance text-[17px] leading-relaxed text-white/82 sm:text-xl">
            <StaggeredWords text={hero.body} offset={9} />
          </p>

          <div className="hero-actions mt-8 flex flex-col items-start gap-3">
            <form action="#demo" className="flex h-[58px] w-[min(100%,470px)] items-center rounded-full bg-white p-1.5 pl-6 shadow-[0_12px_40px_rgba(0,0,0,.18)]" onSubmit={(event) => { event.preventDefault(); document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" }) }}>
              <label htmlFor="hero-work-email" className="sr-only">Work email</label>
              <input id="hero-work-email" name="email" type="email" required autoComplete="email" placeholder="Enter your work email" className="min-w-0 flex-1 bg-transparent text-[15px] text-navy placeholder:text-navy/45 focus:outline-none" />
              <button type="submit" className="inline-flex h-[46px] shrink-0 items-center gap-2 rounded-full bg-navy px-5 text-[13px] font-semibold text-white transition-colors hover:bg-navy-700 sm:px-6">
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
