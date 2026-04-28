"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CTA_CONTENT } from "@/constants/data";

const ContactCTA = () => {
  return (
    <section id="contact" className="py-12 bg-gray-200 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contactbg.png"
          fill
          alt="Contact Us"
          className="object-cover"
        />
      </div>

      <div className="max-w-7xl px-4 sm:px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3 p-6 sm:p-8 text-white bg-[#4CAF50] rounded-2xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              {CTA_CONTENT.title}
            </h2>

            <p className="text-green-50 mb-6 text-sm sm:text-base md:text-lg leading-relaxed">
              {CTA_CONTENT.description}
            </p>

            {Array.isArray(CTA_CONTENT.contacts) &&
              CTA_CONTENT.contacts.length > 0 && (
                <div className="space-y-3 mb-6">
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
                        className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2"
                      >
                        <Icon className="w-4 h-4 text-white shrink-0" />
                        <span className="text-xs sm:text-sm">
                          {c.label}:{" "}
                          <span className="font-semibold">{c.value}</span>
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}

            <Button className="bg-[#333] hover:bg-black text-white rounded-full px-6 py-4 text-sm sm:text-base w-full sm:w-auto">
              {CTA_CONTENT.buttonText}
            </Button>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
          >
            <Image
              src={CTA_CONTENT.image}
              width={500}
              height={500}
              alt="Vegetable Basket"
              className="w-full max-w-xl md:max-w-2xl md:h-128 rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;