import { motion } from 'framer-motion'

type Props = {
  title: string
  description: string
}

export const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <motion.li
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(95,65,46,0.15)' }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="bg-dusty-rose p-7 flex flex-col gap-3 cursor-default"
    >
      <h3 className="font-serif text-lg text-brand">{title}</h3>
      <p className="font-sans text-sm leading-relaxed text-brand-hover">{description}</p>
    </motion.li>
  )
}
