import { motion } from 'framer-motion'
import LogoBrand from './LogoBrand'

export default function Hero() {
  return (
    <section className="bg-surface px-6 py-24 text-center md:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="flex flex-col items-center gap-8"
      >
        <h1 className="flex justify-center">
          <LogoBrand />
        </h1>
        <p className="font-sans text-base text-brand-hover md:text-lg">
          Seu direito, defendido com dedicação e preparo.
        </p>
        <motion.a
          href="#contato"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="inline-block bg-brand px-10 py-3 font-sans text-sm font-medium tracking-widest text-white transition-colors duration-300 hover:bg-brand-hover"
        >
          Entre em contato
        </motion.a>
      </motion.div>
    </section>
  )
}
