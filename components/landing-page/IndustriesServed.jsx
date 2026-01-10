"use client";
import { INDUSTRIES_SERVED } from "@/constants/data";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const IndustriesServed = () => {
	return (
		<section
			id="industries-we-serve"
			className="py-10 bg-[#FDFCF8] px-6 md:px-0 relative overflow-hidden"
		>
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/industriesbg.png"
					width={1200}
					height={600}
					alt="Industries We Serve"
					className="w-full h-full object-cover"
				/>
			</div>

			{/* Content */}
			<div className="mx-auto max-w-7xl relative z-10">
				<div className="text-center mb-16">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold text-gray-900 uppercase"
					>
						Industries We Serve
					</motion.h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{INDUSTRIES_SERVED.map((industry, index) => {
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
								className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
							>
								<div className="h-64 relative">
									<Image
										src={industry.image}
										width={300}
										height={200}
										alt={industry.title}
										className="w-full h-full object-cover"
									/>
									<div className="absolute -bottom-6 right-6 w-12 h-12 bg-[#B7D333] rounded-lg flex items-center justify-center shadow-lg">
										{/* image icon */}
										<Image
											src={industry.icon}
											width={24}
											height={24}
											alt={industry.title}
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
								<div className="p-8 pt-10">
									<h3 className="text-xl font-bold text-gray-900 mb-3">
										{industry.title}
									</h3>
									<p className="text-gray-500 text-sm leading-relaxed mb-4">
										{industry.description}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>

				{/* <div className="flex justify-center">
					<Button className="bg-[#333333] text-white rounded-full px-8 py-6">
						View All
					</Button>
				</div> */}
			</div>
		</section>
	);
};

export default IndustriesServed;
