import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { MessageCircle, Mail } from 'lucide-react'
import type { ReactNode } from 'react'

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const whatsappMessage = encodeURIComponent('Olá, Mariane! Gostaria de agendar uma consulta.')

const contacts: { icon: ReactNode; label: string; href: string; display: string }[] = [
  {
    icon: <MessageCircle size={20} strokeWidth={1.5} />,
    label: 'WhatsApp',
    href: `https://wa.me/5581989053020?text=${whatsappMessage}`,
    display: '(81) 98905-3020',
  },
  {
    icon: <Mail size={20} strokeWidth={1.5} />,
    label: 'E-mail',
    href: 'mailto:mariane.barbosa@aluno.uepb.edu.br',
    display: 'mariane.barbosa@aluno.uepb.edu.br',
  },
  {
    icon: <InstagramIcon />,
    label: 'Instagram',
    href: '#',
    display: '@a.confirmar',
  },
]

export default function Contato() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contato" className="bg-brand px-6 py-20">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-serif text-3xl text-white mb-4">Entre em Contato</h2>
        <p className="font-sans text-sm text-dusty-rose mb-10">
          Agende uma consulta ou tire suas dúvidas diretamente.
        </p>
        <address className="not-italic flex flex-col gap-5">
          {contacts.map(({ icon, label, href, display }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="flex items-center gap-3 justify-center font-sans text-sm text-dusty-rose hover:text-white transition-colors duration-300"
            >
              {icon}
              <span>{display}</span>
            </motion.a>
          ))}
        </address>
      </motion.div>
    </section>
  )
}
