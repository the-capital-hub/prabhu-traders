"use client";
import { TESTIMONIALS } from "@/constants/data";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Twitter, Linkedin, Star } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
	return (
		<section className="py-10 bg-white  px-6 md:px-0">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-purple-600 font-bold tracking-widest text-xs uppercase mb-2"
					>
						TESTIMONIAL
					</motion.p>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl md:text-5xl font-bold text-gray-900"
					>
						Wall of Love 💜
					</motion.h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{TESTIMONIALS.map((testimonial, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							className="h-full"
						>
							<Card className="h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
								<CardHeader className="flex flex-row items-start justify-between pb-2">
									<div className="flex items-center gap-3">
										<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
											<Image
												src={
													testimonial.image || `/images/avatar${index + 1}.png`
												}
												width={40}
												height={40}
												alt={testimonial.name}
												className="w-full h-full object-cover"
											/>
										</div>
										<div>
											<h4 className="text-sm font-bold text-gray-900">
												{testimonial.name}
											</h4>
											<p className="text-xs text-gray-500">
												{testimonial.handle}
											</p>
										</div>
									</div>
									{testimonial.platform === "twitter" ? (
										<Twitter className="w-4 h-4 text-gray-400" />
									) : (
										<Linkedin className="w-4 h-4 text-gray-400" />
									)}
								</CardHeader>
								<CardContent>
									<div className="flex mb-3">
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className="w-3 h-3 text-yellow-400 fill-yellow-400"
											/>
										))}
									</div>
									<p className="text-sm text-gray-700 leading-relaxed">
										{testimonial.text
											.split(testimonial.highlight)
											.map((part, i, arr) => (
												<span key={i}>
													{part}
													{i < arr.length - 1 && (
														<span className="bg-teal-100 px-1 py-0.5 rounded text-teal-900 font-medium">
															{testimonial.highlight}
														</span>
													)}
												</span>
											))}
									</p>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
