import { motion } from 'framer-motion'
import { Code, Database, Layers, Sparkles } from 'lucide-react'

const techs = [
  { name: 'React', category: 'Frontend', icon: Layers, color: 'from-sky-500 to-cyan-500' },
  { name: 'TypeScript', category: 'Language', icon: Code, color: 'from-blue-600 to-indigo-600' },
  { name: 'Tailwind CSS', category: 'Styling', icon: Sparkles, color: 'from-teal-500 to-emerald-500' },
  { name: 'FastAPI', category: 'Backend', icon: Code, color: 'from-emerald-600 to-lime-600' },
  { name: 'MongoDB', category: 'Database', icon: Database, color: 'from-green-600 to-emerald-600' },
]

export default function TechStack() {
  return (
    <section id="tech" className="relative py-20 bg-white">
      <div className="absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-indigo-50 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Tech I love
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-3 text-gray-600 max-w-2xl"
        >
          A stack that helps me ship fast, maintain quality, and keep things fun and interactive.
        </motion.p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techs.map((t, i) => {
            const Icon = t.icon
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${t.color} text-white shadow-lg`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{t.name}</h3>
                <p className="text-sm text-gray-600">{t.category}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
