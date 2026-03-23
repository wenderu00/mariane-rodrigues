type Props = {
  title: string
  description: string
}

export default function ServiceCard({ title, description }: Props) {
  return (
    <li className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex flex-col gap-3">
      <h3 className="font-serif text-lg text-stone-800">{title}</h3>
      <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
    </li>
  )
}
