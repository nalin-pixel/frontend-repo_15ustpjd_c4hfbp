import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const floatTransition = {
  duration: 4,
  repeat: Infinity,
  repeatType: 'mirror',
  ease: 'easeInOut',
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-gradient-to-b from-white to-indigo-50">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient veil to improve text contrast without blocking interactions */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white/70 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Animated • Interactive • Futuristic
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Crafting interfaces that
            <span className="block bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 bg-clip-text text-transparent"> move and respond</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-gray-700 max-w-xl"
          >
            I build modern web apps with immersive visuals, snappy motion, and a focus on clarity and accessibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-gray-900 text-white shadow-lg shadow-indigo-500/20"
            >
              View Projects
            </motion.a>
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              href="#tech"
              className="inline-flex items-center justify-center px-5 py-3 rounded-full bg-white border border-gray-200 text-gray-900 hover:bg-gray-50"
            >
              Tech Stack
            </motion.a>
          </motion.div>
        </div>

        {/* floating badges for extra motion */}
        <div className="hidden md:block relative">
          <motion.div
            className="absolute right-10 top-8 rounded-xl bg-white/80 backdrop-blur border border-indigo-100 px-4 py-3 shadow-lg"
            initial={{ opacity: 0, y: 20, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            whileHover={{ scale: 1.03 }}
          >
            <p className="text-sm font-medium text-gray-800">Spline-powered hero</p>
            <p className="text-xs text-gray-600">Interactive 3D grid of cubes</p>
          </motion.div>

          <motion.div
            className="absolute right-0 bottom-14 h-24 w-24 rounded-full bg-gradient-to-tr from-indigo-500/40 to-fuchsia-500/40 blur-2xl"
            animate={{ y: [0, -12, 0], x: [0, 6, 0] }}
            transition={floatTransition}
          />
          <motion.div
            className="absolute -right-6 bottom-32 h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500/50 to-cyan-500/50 blur-xl"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />
        </div>
      </div>
    </section>
  )
}
