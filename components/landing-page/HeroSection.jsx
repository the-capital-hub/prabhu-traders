"use client";
import { HERO_CONTENT } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
	return (
		<section
			id="home"
			className="relative min-h-screen flex flex-col justify-start overflow-hidden bg-linear-to-b from-white to-gray-50 pt-32 pb-12"
		>
			{/* Background Image - Positioned in bottom 3/4 */}
			<div className="absolute bottom-0 left-0 right-0 h-1/2 md:h-[90%] z-0">
				<Image
					src="/images/herobg.png"
					width={1920}
					height={1080}
					alt="Hero Background"
					className="w-full h-full object-cover object-top"
					priority
				/>
				{/* Gradient overlay to blend image with top white section if needed */}
				<div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-white to-transparent"></div>
			</div>

			<div className="container relative z-10 max-w-7xl mx-auto px-6 text-center">
				<motion.h1
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6 }}
					className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 max-w-5xl mx-auto leading-tight"
				>
					{HERO_CONTENT.title}
				</motion.h1>

				<motion.p
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
				>
					{HERO_CONTENT.subtitle}
				</motion.p>

				{/* <motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<Button className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-6 text-lg group shadow-lg hover:shadow-xl transition-all">
						{HERO_CONTENT.ctaText}
						<ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
					</Button>
				</motion.div> */}
			</div>
		</section>
	);
};

export default HeroSection;
