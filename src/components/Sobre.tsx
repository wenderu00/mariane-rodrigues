import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import fotoAdvogada from '../assets/foto-mariane.svg'

export default function Sobre() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre" className="bg-warm-gray px-6 py-20 md:py-28">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-5xl flex flex-col gap-12 md:flex-row md:items-center md:gap-16"
      >
        <figure className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            src={fotoAdvogada}
            alt="Mariane Rodrigues, advogada especialista em Direito Previdenciário"
            className="h-72 w-72 object-cover object-top rounded-sm shadow-md md:h-96 md:w-80"
          />
        </figure>
        <div className="flex flex-col gap-6">
          <h2 className="font-serif text-3xl font-light text-brand md:text-4xl">
            Sobre Mariane Rodrigues
          </h2>
          <p className="font-sans text-base leading-relaxed text-black">
            Sou Mariane Rodrigues, estudante de Direito pela Universidade Estadual da Paraíba
            (UEPB), com experiência prática em Direito Previdenciário adquirida no Escritório
            Novais &amp; Aguiar e na Procuradoria Federal Especializada do INSS. Acredito que
            cada cliente merece atenção individualizada e orientação jurídica clara, acessível
            e comprometida com seus direitos.
          </p>
          <ul className="flex flex-col gap-2 font-sans text-sm text-brand-hover">
            <li>Bacharelado em Direito — UEPB (desde 2021, previsão 2026)</li>
            <li>Membro do NAE OAB-CG</li>
            <li>Experiência em petições, recursos e embargos</li>
            <li>Passagem pela Procuradoria Federal do INSS</li>
            <li>Participação em congressos jurídicos nacionais</li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}
