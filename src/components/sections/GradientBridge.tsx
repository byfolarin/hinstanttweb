import dashboard from "../../assets/hinstantt-dashboard-desktop.png"

export function GradientBridge() {
  return (
    <section className="gradient-bridge relative h-[68svh] min-h-[560px] overflow-hidden bg-[#111927]">
      <div className="gradient-bridge-orb gradient-bridge-orb-a" />
      <div className="gradient-bridge-orb gradient-bridge-orb-b" />
      <div className="gradient-bridge-orb gradient-bridge-orb-c" />
      <div className="gradient-bridge-glow" />
      <div className="gradient-tablet absolute left-1/2 top-1/2 z-10 w-[min(980px,84vw)] -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-white/25 bg-[#090d15] p-[10px] shadow-[0_55px_130px_rgba(2,5,12,.5)] sm:rounded-[42px] sm:p-[14px]">
        <div className="relative overflow-hidden rounded-[24px] bg-white sm:rounded-[31px]">
          <img src={dashboard} alt="Hinstantt finance dashboard displayed on a tablet" className="block h-auto w-full" />
          <span aria-hidden="true" className="absolute left-1/2 top-2 size-2 -translate-x-1/2 rounded-full bg-[#111927]/55 sm:top-3" />
        </div>
      </div>
    </section>
  )
}
