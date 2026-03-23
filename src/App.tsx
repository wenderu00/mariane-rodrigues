import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Contato from './components/Contato'

export default function App() {
  return (
    <main className="bg-surface font-sans">
      <Hero />
      <Sobre />
      <Servicos />
      <Contato />
    </main>
  )
}
