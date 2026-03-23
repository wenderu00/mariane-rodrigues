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

export default function Servicos() {
  return (
    <section className="py-20 px-6 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl text-stone-800 mb-10 text-center">Áreas de Atuação</h2>
        <ul className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </ul>
      </div>
    </section>
  )
}
