"use client";

import Image from "next/image";
import { FOOTER_LINKS } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Store } from "lucide-react";

const Footer = () => {
	return (
		<footer className="relative bg-black text-white pt-32 pb-10 px-6 md:px-0 overflow-hidden">
			{/* Background Image Overlay */}
			<div className="absolute inset-0 opacity-40 z-0">
				<Image
					src="/images/footerbg.png"
					alt="Seafood Background"
					width={1974}
					height={1280}
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black via-black/80 to-transparent"></div>
			</div>

			<div className="container relative z-10 mx-auto max-w-7xl">
				{/* Newsletter Section */}
				<div className="flex flex-col md:flex-row justify-between items-center mb-24 gap-8">
					<div className="md:w-1/2">
						<h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
							Keep up with the latest
						</h2>
						<p className="text-white">
							Join our newsletter to stay upto date on features and releases.
						</p>
					</div>
					<div className="md:w-1/2 w-full max-w-md">
						<h3 className="text-white text-sm font-medium mb-4">
							Stay Upto Date with Our Newsletter
						</h3>
						<div className="flex flex-col sm:flex-row gap-3">
							<div className="relative grow">
								<input
									type="email"
									placeholder="Enter your email"
									className="w-full bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
								/>
								<span className="absolute -bottom-6 left-6 text-[10px] text-gray-500">
									By subscribing you agree to our Privacy Policy
								</span>
							</div>
							<Button className="rounded-full px-8 py-4 bg-white text-black hover:bg-gray-200 h-auto font-medium cursor-pointer">
								Subscribe
							</Button>
						</div>
					</div>
				</div>

				<div className="h-px w-full bg-white/20 mb-16"></div>

				{/* Footer Links */}
				<div className="grid grid-cols-2 md:grid-cols-6 gap-8">
					{/* Brand Column */}
					<div className="col-span-2 md:col-span-2">
						<div className="flex items-center gap-2 mb-6">
							<div className="bg-white p-1 rounded-md">
								<Store className="text-black w-5 h-5" />
							</div>
							<span className="text-white font-bold text-xl">
								Prabhu Traders
							</span>
						</div>
						<p className="text-gray-400 text-sm max-w-xs mb-6">
							Make your complicated sourcing simple. Trusted commodity trading
							partner for 30+ years.
						</p>
					</div>

					{/* Link Columns */}
					{FOOTER_LINKS.map((column, index) => (
						<div key={index} className="col-span-1">
							<h4 className="font-bold text-white mb-6">{column.title}</h4>
							<ul className="space-y-4">
								{column.links.map((link, idx) => (
									<li key={idx}>
										<a
											href={link.href}
											className="text-gray-400 hover:text-white text-sm transition-colors"
										>
											{link.label}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
