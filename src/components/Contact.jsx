import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900"
        >
          Contact
        </motion.h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          Have a project in mind or want to collaborate? Drop a message and I’ll get back soon.
        </p>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="you@example.com" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-gray-900" placeholder="Tell me about your project" />
            </div>
            <button type="submit" className="mt-6 inline-flex items-center justify-center rounded-full bg-gray-900 px-5 py-3 text-white hover:scale-[1.01] active:scale-[0.99] transition-transform">
              Send Message
            </button>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-gray-200 bg-gradient-to-br from-indigo-50 to-violet-50 p-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">Let’s build something great</h3>
            <p className="mt-2 text-gray-700">
              I care about clarity, maintainability, and motion that feels purposeful. If that resonates, I’d love to chat.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• Based in Remote</li>
              <li>• Open to freelance and full-time roles</li>
              <li>• Timezone friendly</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
