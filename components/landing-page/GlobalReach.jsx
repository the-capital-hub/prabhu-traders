"use client";

import { motion } from "framer-motion";
import { Globe2, MapPin } from "lucide-react";
import { GLOBAL_REACH } from "@/constants/data";

const GlobalReach = () => {
  return (
    <section id="market-reach" className="py-10 bg-white px-6 md:px-0">
      <div className="mx-auto text-center max-w-7xl">
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-4"
          >
            <Globe2 size={14} className="text-gray-600" />
            <span className="text-xs font-bold tracking-widest uppercase text-gray-600">
              Market Presence
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight uppercase"
          >
            Global & Domestic Market Reach
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg"
          >
            Strategically positioned to cater to buyers across major trade hubs
            and domestic markets.
          </motion.p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {GLOBAL_REACH.map((region, index) => {
            const Icon = region.icon;
            return (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative w-full md:w-[calc(45%-1rem)] lg:w-[calc(30%-1rem)] min-w-[300px]"
              >
                <div
                  className={`relative z-10 ${region.color} border border-black/5 p-5 rounded-3xl flex flex-col items-center justify-center w-full min-h-64 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none transition-transform group-hover:scale-110 duration-700">
                    <MapPin className="w-full h-full absolute -right-10 -bottom-10" />
                  </div>

                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md transition-transform group-hover:rotate-12">
                    <Icon className="w-8 h-8 text-gray-900" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-xl tracking-tight leading-tight">
                    {region.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-full border border-gray-100"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <p className="text-gray-600 text-sm font-medium">
            Our logistics partners ensure reliable port-to-port and door-to-door
            delivery solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalReach;
