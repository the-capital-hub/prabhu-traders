"use client";
import { PRODUCTS_CONTENT } from "@/constants/data";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

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
							className={`flex flex-col md:flex-row items-center gap-12 ${
								index % 2 !== 0 ? "md:flex-row-reverse" : ""
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
											{product.highlights.map((highlight, idx) => (
												<Badge
													key={idx}
													variant="dark"
													className="rounded-full px-4 py-2 text-sm font-normal"
												>
													• {highlight}
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
											{product.tags.map((tag, idx) => (
												<Badge
													key={idx}
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

							{/* Image */}
							<motion.div
								initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="md:w-1/2 w-full"
							>
								<div className="relative rounded-3xl overflow-hidden shadow-xl h-[300px] md:h-[400px]">
									<img
										src={product.image}
										alt={product.category}
										className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
									/>
								</div>
							</motion.div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ProductCategories;
