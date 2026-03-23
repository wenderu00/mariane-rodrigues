export default function LogoBrand() {
  return (
    <div className="flex items-center gap-5">
      <div
        className="flex items-end font-display italic leading-none text-brand"
        style={{ fontSize: '5.5rem' }}
      >
        <span>M</span>
        <span style={{ marginLeft: '-1.1rem' }}>R</span>
      </div>
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
