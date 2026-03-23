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
  return (
    <section id="contato" className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-3xl text-stone-800 mb-4">Entre em Contato</h2>
        <p className="text-stone-500 mb-10">Agende uma consulta ou tire suas dúvidas diretamente.</p>
        <address className="not-italic flex flex-col gap-4">
          {contacts.map(({ icon, label, href, display }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center text-stone-700 hover:text-stone-900 transition-colors"
            >
              {icon}
              <span>{display}</span>
            </a>
          ))}
        </address>
      </div>
    </section>
  )
}
