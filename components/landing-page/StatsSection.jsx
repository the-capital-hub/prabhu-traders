"use client";
import { HERO_CONTENT } from "@/constants/data";
import { motion } from "framer-motion";

const StatsSection = () => {
	return (
		<section className="py-10 bg-gray-50">
			<div className="px-10">
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="grid grid-cols-2 md:grid-cols-5 gap-4"
				>
					{HERO_CONTENT.stats.map((stat, index) => (
						<div
							key={index}
							className="flex flex-col items-center justify-center border border-gray-200 gap-4 md:gap-8 rounded-lg bg-white p-2 shadow-md"
						>
							<span className="text-center text-md md:text-lg font-semibold text-gray-800">
								{stat}
							</span>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default StatsSection;
