import heroBackground from "../../assets/hero-background.png"

export function GlassMotion() {
  return (
    <section
      aria-label="Hinstantt business scale"
      className="w-full bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col items-center py-12 text-center sm:py-16">
        <div className="relative grid w-[min(48vw,250px)] place-items-center">
          <svg
            aria-hidden="true"
            className="aspect-[206/178] w-full"
            viewBox="0 0 206 178"
            role="presentation"
          >
            <defs>
              <clipPath id="hinstantt-business-mark">
                <path d="M177.5 0H133.478V88.5184V177.033H177.5L205.427 88.5184L177.5 0Z" />
                <path d="M0 0V177.033H44.0219L133.477 88.5184L44.0219 0H0Z" />
              </clipPath>
            </defs>
            <image
              href={heroBackground}
              width="206"
              height="178"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#hinstantt-business-mark)"
            />
          </svg>
          <strong className="absolute z-10 whitespace-nowrap font-display text-[clamp(3rem,6.5vw,6rem)] font-medium leading-none tracking-[-0.065em] text-white [text-shadow:0_2px_3px_rgba(17,25,39,0.9),0_8px_24px_rgba(17,25,39,0.45)]">
            12,000+
          </strong>
        </div>
        <p className="mt-8 font-display text-[clamp(1.4rem,2.4vw,2.5rem)] leading-none tracking-[-0.035em] text-navy">
          businesses running on Hinstantt.
        </p>
      </div>
    </section>
  )
}
