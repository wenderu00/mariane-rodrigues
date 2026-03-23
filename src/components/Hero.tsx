import LogoBrand from './LogoBrand'

export default function Hero() {
  return (
    <section className="bg-surface-muted px-6 py-20 text-center md:py-32">
      <h1 className="flex justify-center">
        <LogoBrand />
      </h1>
      <p className="mt-8 font-sans text-base text-brand-light md:text-lg">
        Seu direito, defendido com dedicação e preparo.
      </p>
      <a
        href="#contato"
        className="mt-10 inline-block bg-brand px-8 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-brand-light"
      >
        Entre em contato
      </a>
    </section>
  )
}
