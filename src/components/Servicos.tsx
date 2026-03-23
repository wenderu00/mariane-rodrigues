import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ServiceCard from './ServiceCard'

const services = [
  {
    title: 'Direito Previdenciário',
    description:
      'Assessoria em benefícios do INSS, aposentadorias, pensões e revisões de benefícios negados ou suspensos.',
  },
  {
    title: 'Direito Trabalhista',
    description:
      'Orientação em relações de emprego, rescisões, horas extras, assédio moral e demais direitos do trabalhador.',
  },
  {
    title: 'Direito de Família',
    description:
      'Acompanhamento em divórcios, guarda de filhos, pensão alimentícia, inventário e questões familiares sensíveis.',
  },
  {
    title: 'Mediação e Arbitragem',
    description:
      'Resolução de conflitos de forma extrajudicial, com mais agilidade e menos desgaste para as partes.',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

export default function Servicos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-surface px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="font-serif text-3xl text-brand mb-10 text-center"
        >
          Áreas de Atuação
        </motion.h2>
        <motion.ul
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-px sm:grid-cols-2 bg-warm-gray"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
