import artwork from "../../assets/hinstantt-22000-businesses-3d.png"
import { Reveal } from "../ui/Reveal"

export function BusinessScale3D() {
  return (
    <section className="overflow-hidden bg-[#f4f0ea] px-2 py-2 sm:px-3 sm:py-3" aria-label="22,000 businesses running on Hinstantt">
      <Reveal className="block overflow-hidden rounded-[24px] bg-[#f4f0ea] sm:rounded-[30px]">
        <img
          src={artwork}
          alt="22,000 businesses running on Hinstantt"
          className="block h-auto w-full scale-[1.01] object-cover"
        />
      </Reveal>
    </section>
  )
}
