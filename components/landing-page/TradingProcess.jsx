"use client";
import { PROCESS_STEPS } from "@/constants/data";
import { motion } from "framer-motion";

const TradingProcess = () => {
	return (
		<section id="our-trading-process" className="py-10 bg-gray-50/50 px-6 md:px-0">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-16">
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-4"
					>
						<span className="text-xs font-bold tracking-widest uppercase text-gray-600">
							Workflow
						</span>
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight uppercase"
					>
						Our Trading Process
					</motion.h2>
				</div>

				<div className="flex flex-wrap justify-center gap-8">
					{PROCESS_STEPS.map((step, index) => {
						const Icon = step.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
								className="relative group w-full md:w-[calc(45%-1rem)] lg:w-[calc(30%-1rem)] min-w-[300px]"
							>
								<div className="h-full bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 flex flex-col items-start text-left">
									{/* Top Row: Icon and Step Number */}
									<div className="w-full flex items-center justify-between mb-8">
										<div className={`w-14 h-14 ${step.color} rounded-xl flex items-center justify-center shadow-inner transition-transform group-hover:rotate-6`}>
											<Icon className="w-7 h-7 text-gray-900" />
										</div>
										<span className="text-4xl md:text-6xl font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-500">
											0{index + 1}
										</span>
									</div>

									{/* Content */}
									<div className="relative z-10">
										<h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-black transition-colors">
											{step.title}
										</h3>
										<p className="text-gray-600 text-sm leading-relaxed">
											{step.description}
										</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TradingProcess;
