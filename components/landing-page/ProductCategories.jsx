"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { PRODUCTS_CONTENT } from "@/constants/data";

const ProductCategories = () => {
  return (
    <section id="products" className="py-10 bg-white px-6 md:px-0">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 uppercase"
          >
            Our Core Product Categories
          </motion.h2>
        </div>

        <div className="space-y-12">
          {PRODUCTS_CONTENT.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {product.category}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {product.description}
                </p>

                {product.highlights && product.highlights.length > 0 && (
                  <div className="mb-6">
                    <p className="font-semibold text-gray-800 mb-3">
                      Key Highlights:
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {product.highlights.map((highlight) => (
                        <Badge
                          key={highlight}
                          variant="dark"
                          className="rounded-full px-4 py-2 text-sm font-normal"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {product.tags && product.tags.length > 0 && (
                  <div>
                    <p className="font-semibold text-gray-800 mb-3">
                      {product.productRangeTitle || "Product Range:"}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {product.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="dark"
                          className="rounded-full px-4 py-2 text-sm font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Image / Collage */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:w-1/2 w-full"
              >
                {product.id !== "frozen" ? (
                  <div className="relative rounded-3xl overflow-hidden shadow-xl h-75 md:h-100">
                    <Image
                      src={product.image}
                      alt={product.category}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col gap-3 h-75 md:h-100">

                    <div className="grid grid-cols-4 gap-3 flex-1">
                      {product.images.slice(0, 4).map((img, i) => (
                        <div key={i} className="relative overflow-hidden rounded-xl">
                          <Image
                            src={img}
                            alt={`frozen-top-${i}`}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-3 gap-3 flex-1">
                      {product.images.slice(4, 7).map((img, i) => (
                        <div key={i} className="relative overflow-hidden rounded-xl">
                          <Image
                            src={img}
                            alt={`frozen-bottom-${i}`}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>

                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;