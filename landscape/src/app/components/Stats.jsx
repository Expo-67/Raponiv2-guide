"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: "10+", label: "Completed Projects" },
    { number: "12+", label: "Years Experience" },
    { number: "5+", label: "Testimonials" },
  ];

  return (
    <section className="py-16 bg-green-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1500')] opacity-10 bg-cover bg-center"></div>
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-block p-6 rounded-full bg-white/10 mb-4">
                <div className="bg-yellow-500 text-green-900 h-16 w-16 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">
                    {stat.number.split("+")[0]}
                  </span>
                  {stat.number.includes("+") && (
                    <span className="text-xl font-bold">+</span>
                  )}
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-2">{stat.number}</h3>
              <p className="uppercase tracking-wider text-yellow-300 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
