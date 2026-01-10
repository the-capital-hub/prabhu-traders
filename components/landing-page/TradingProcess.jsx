"use client";
import { PROCESS_STEPS } from "@/constants/data";
import { motion } from "framer-motion";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
} from "@/components/ui/card";

const TradingProcess = () => {
	return (
		<section id="our-trading-process" className="py-20 bg-gray-50 px-6 md:px-0">
			<div className="mx-auto max-w-7xl">
				<div className="text-center mb-10">
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="text-3xl md:text-4xl font-bold text-gray-900 uppercase"
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
								className="w-full md:w-[30%] min-w-75"
							>
								<Card
									className={`h-full border-none shadow-none ${step.color} rounded-2xl`}
								>
									<CardHeader>
										<div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mb-4 shadow-sm">
											<Icon className="w-5 h-5 text-gray-900" />
										</div>
										<CardTitle className="text-xl font-bold text-gray-900 mb-2">
											{step.title}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription className="text-gray-700 text-base leading-relaxed">
											{step.description}
										</CardDescription>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default TradingProcess;
