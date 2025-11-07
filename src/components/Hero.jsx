import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white to-indigo-50">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Building modern, animated, and interactive web experiences
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg text-gray-700 max-w-xl"
          >
            I’m a developer focused on crafting delightful products with clean code, accessibility, and a love for motion.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gray-900 text-white hover:scale-[1.02] active:scale-[0.98] transition-transform">
              View Projects
            </a>
            <a href="#tech" className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white border border-gray-200 text-gray-900 hover:bg-gray-50">
              Tech Stack
            </a>
          </motion.div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  )
}
