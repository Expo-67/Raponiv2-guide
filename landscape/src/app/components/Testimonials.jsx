"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Janet",
      quote:
        "Raponi Landscaping transformed my backyard into a beautiful oasis. Their attention to detail and creativity exceeded my expectations!",
    },
    {
      name: "Michael Njoroge",
      quote:
        " They provided exceptional service and my garden has never looked better.",
    },
    {
      name: "Emily Otieno",
      quote:
        "I highly recommend Raponi Landscaping for their professionalism and expertise. They turned my vision into reality with stunning results!",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-3">
            <Quote className="text-green-600 mr-2 h-5 w-5" />
            <span className="text-green-600 font-semibold uppercase tracking-wider">
              What clients say
            </span>
          </div>
          <h2 className="text-4xl font-bold mt-2 text-green-900">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-black">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-green-600"
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 text-green-600 p-3 rounded-full mr-4">
                  <Star className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-green-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic text-lg leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
