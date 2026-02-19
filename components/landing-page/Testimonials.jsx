"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { TESTIMONIALS } from "@/constants/data";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-10 bg-gray-50/50 px-6 md:px-0">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-4"
          >
            <span className="text-xs font-bold tracking-widest uppercase text-gray-600">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight"
          >
            Voices of Trust
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg"
          >
            Discover why businesses worldwide choose Prabhu Traders as their
            preferred commodity partner.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group h-full"
            >
              <div className="h-full bg-white border border-gray-100 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden">
                {/* Quote background decoration */}
                <div className="absolute -top-4 -right-4 text-gray-50 group-hover:text-gray-100 transition-colors">
                  <Quote size={120} />
                </div>

                {/* Header: User Info */}
                <div className="relative z-10 flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 rounded-full bg-gray-100 overflow-hidden border-2 border-white shadow-sm">
                    <Image
                      src={
                        testimonial.image || `/images/avatar${index + 1}.png`
                      }
                      fill
                      alt={testimonial.name}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <div className="flex gap-1 mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative z-10 grow">
                  <p className="text-gray-600 leading-relaxed italic text-lg lg:text-base xl:text-lg">
                    {testimonial.text
                      .split(testimonial.highlight)
                      .map((part, _, arr) => {
                        const keyBase = `${part}-${testimonial.highlight}`;

                        return (
                          <span key={keyBase}>
                            {part}
                            {arr.indexOf(part) < arr.length - 1 && (
                              <span className="text-gray-900 font-bold not-italic border-b-2 border-yellow-400/30">
                                {testimonial.highlight}
                              </span>
                            )}
                          </span>
                        );
                      })}
                  </p>
                </div>

                {/* Subtle bottom detail */}
                <div className="relative z-10 mt-8 pt-6 border-t border-gray-50">
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                    <div className="w-4 h-px bg-gray-300" /> Verified Partner
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
