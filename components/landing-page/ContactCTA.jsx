"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CTA_CONTENT } from "@/constants/data";

const ContactCTA = () => {
  return (
    <section id="contact" className="pt-10 bg-gray-200 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contactbg.png"
          width={1200}
          height={600}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl px-6 mx-auto">
        <div className="relative overflow-hidden min-h-100 flex items-center">
          <div className="flex flex-col md:flex-row items-end justify-between w-full h-full relative z-10">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 p-8 md:p-10 text-white bg-[#4CAF50]"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {CTA_CONTENT.title}
              </h2>
              <p className="text-green-50 mb-8 text-lg md:max-w-md leading-relaxed">
                {CTA_CONTENT.description}
              </p>

              {Array.isArray(CTA_CONTENT.contacts) &&
                CTA_CONTENT.contacts.length > 0 && (
                  <div className="mt-6 space-y-3">
                    {CTA_CONTENT.contacts.map((c) => {
                      const Icon =
                        c.type === "phone"
                          ? Phone
                          : c.type === "email"
                            ? Mail
                            : c.type === "whatsapp"
                              ? MessageCircle
                              : MapPin;
                      return (
                        <div
                          key={`${c.type}-${c.value}`}
                          className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-3"
                        >
                          <Icon className="w-4 h-4 text-white" />
                          <span className="text-white text-sm">
                            {c.label}:{" "}
                            <span className="font-semibold">{c.value}</span>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              <Button className="bg-[#333] hover:bg-black text-white rounded-full px-8 py-6 text-base shadow-lg transition-transform hover:scale-105 mt-10">
                {CTA_CONTENT.buttonText}
              </Button>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 h-full flex justify-end"
            >
              {/* Basket Image */}
              <Image
                src={CTA_CONTENT.image}
                width={500}
                height={300}
                alt="Vegetable Basket"
                className="w-full max-w-125 h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
