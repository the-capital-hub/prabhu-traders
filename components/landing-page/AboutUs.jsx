"use client";
import { ABOUT_CONTENT } from "@/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
	return (
		<section
			id="about"
			className="py-10 bg-white px-6 md:px-0 relative overflow-hidden"
		>
			{/* Background */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/aboutbg.png"
					width={1920}
					height={1080}
					alt="Background"
					className="w-full h-full object-cover"
				/>
			</div>
			{/* Content */}
			<div className="mx-auto max-w-7xl relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="rounded-3xl p-8 md:p-12 border border-gray-300"
				>
					<div className="flex flex-col md:flex-row gap-12 items-center">
						<div className="md:w-1/2">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 uppercase text-center md:text-left">
								{ABOUT_CONTENT.title}
							</h2>
							<div className="space-y-6 text-gray-600 leading-relaxed">
								{ABOUT_CONTENT.paragraphs.map((para, idx) => (
									<p key={idx}>{para}</p>
								))}
							</div>
						</div>

						<div className="md:w-1/2 relative h-80 md:min-h-100 w-full">
							<div className="w-fit md:w-100 h-fit md:h-auto absolute top-0 right-0 ">
								<Image
									src="/images/aboutimg.png"
									width={500}
									height={500}
									alt="Rice"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default AboutUs;
