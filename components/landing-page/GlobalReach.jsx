"use client";
import { GLOBAL_REACH } from "@/constants/data";
import { motion } from "framer-motion";

const GlobalReach = () => {
	return (
		<section className="py-10 bg-white px-6 md:px-0">
			<div className="mx-auto text-center max-w-7xl">
				<div className="mb-10">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold text-gray-900 uppercase"
					>
						Global & Domestic Market Reach
					</motion.h2>
					<p className="text-gray-600 mt-4">We cater to buyers across:</p>
				</div>

				<div className="flex flex-wrap justify-center gap-6 mb-12">
					{GLOBAL_REACH.map((region, index) => {
						const Icon = region.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								className={`${region.color} px-8 py-6 rounded-2xl flex flex-col items-center justify-center md:w-[30%] min-w-75 shadow-sm`}
							>
								<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm">
									<Icon className="w-5 h-5 text-gray-800" />
								</div>
								<span className="font-bold text-gray-900">{region.name}</span>
							</motion.div>
						);
					})}
				</div>

				<p className="text-gray-500 text-sm">
					Our logistics partners ensure reliable port-to-port and door-to-door
					delivery solutions.
				</p>
			</div>
		</section>
	);
};

export default GlobalReach;
