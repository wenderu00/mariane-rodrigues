import LogoMark from './LogoMark'

export default function LogoBrand() {
  return (
    <div className="flex items-center gap-5">
      <LogoMark className="h-20 w-auto text-brand" />
      <div className="flex flex-col gap-1.5">
        <span className="font-sans text-sm font-normal uppercase tracking-[0.28em] text-brand">
          Mariane Rodrigues
        </span>
        <span className="font-sans text-[0.6rem] font-light uppercase tracking-[0.2em] text-brand">
          Advocacia e Consultoria Jurídica
        </span>
      </div>
    </div>
  )
}
