import investor1 from "../../assets/inv1-BAUFljVm.png"
import investor2 from "../../assets/inv2-ByKlg_zb.png"
import investor3 from "../../assets/inv3-CgoGjjaF.png"
import investor4 from "../../assets/inv4-ND2WVTW8.png"
import investor5 from "../../assets/inv5-Oek692yd.png"
import investor6 from "../../assets/inv6-_7y7Zm3x.png"
import investor7 from "../../assets/inv7-29x_Xo56.png"

const investorLogos = [
  investor1,
  investor2,
  investor3,
  investor4,
  investor5,
  investor6,
  investor7,
]

export function InvestorLogos() {
  return (
    <section aria-label="Hinstantt investors" className="overflow-hidden bg-white py-12 sm:py-16">
      <div className="investor-marquee-mask w-full overflow-hidden">
        <div className="investor-marquee-track flex w-max items-center">
          {[0, 1].map((set) => (
            <div key={set} aria-hidden={set === 1} className="flex shrink-0 items-center gap-16 px-8 sm:gap-24 sm:px-12 lg:gap-32 lg:px-16">
              {investorLogos.map((logo, index) => (
                <img
                  key={`${set}-${logo}`}
                  src={logo}
                  alt={set === 0 ? `Hinstantt investor ${index + 1}` : ""}
                  className="h-7 w-auto max-w-[150px] shrink-0 object-contain opacity-65 grayscale sm:h-8 sm:max-w-[175px]"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
