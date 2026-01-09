"use client";
import { HERO_CONTENT } from "@/constants/data";
import { motion } from "framer-motion";

const StatsSection = () => {
	return (
		<section className="py-10 bg-gray-100">
			<div className="px-10 mx-auto">
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
							className="text-center md:text-left md:border-r last:border-r-0 border-gray-200 pr-4"
						>
							<p className="text-center text-sm md:text-base font-bold text-gray-800">
								{stat}
							</p>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default StatsSection;
