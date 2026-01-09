"use client";
import { QUALITY_CONTENT } from "@/constants/data";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const QualityAssurance = () => {
	return (
		<section className="py-10 bg-white px-6 md:px-0 overflow-hidden">
			<div className="mx-auto max-w-7xl">
				<div className="flex flex-col md:flex-row items-center gap-16">
					{/* Image Side */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="md:w-1/2 relative"
					>
						<div className="relative z-10 overflow-hidden">
							<Image
								src={QUALITY_CONTENT.image}
								width={800}
								height={600}
								alt="Quality Assurance"
								className="w-full h-auto object-cover"
							/>
						</div>
					</motion.div>

					{/* Text Side */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="md:w-1/2"
					>
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 uppercase">
							{QUALITY_CONTENT.title}
						</h2>
						<p className="text-gray-600 mb-8 leading-relaxed">
							{QUALITY_CONTENT.description}
						</p>

						<div className="space-y-4 mb-8">
							{QUALITY_CONTENT.points.map((point, index) => (
								<div
									key={index}
									className="flex items-center gap-3 bg-[#F9F9F9] p-3 rounded-lg border border-gray-100"
								>
									{/* <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" /> */}
									<span className="text-gray-800 font-medium">{point}</span>
								</div>
							))}
						</div>

						<p className="text-gray-500 italic">{QUALITY_CONTENT.footer}</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default QualityAssurance;
