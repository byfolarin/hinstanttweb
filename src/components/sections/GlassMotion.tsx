import glassMotion from "../../assets/hinstantt-blue-accordion-perfect-glass-motion.mp4"

export function GlassMotion() {
  return (
    <section
      aria-label="Hinstantt glass motion"
      className="overflow-hidden bg-white py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[24px] bg-white sm:rounded-[32px]">
          <video
            className="block aspect-video h-auto w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src={glassMotion} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  )
}
