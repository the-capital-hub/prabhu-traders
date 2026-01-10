"use client";

import Image from "next/image";
import Link from "next/link";
import { Store } from "lucide-react";
import { FOOTER_LINKS } from "@/constants/data";

const Footer = () => {
	const handleScroll = (e, href) => {
		if (href.startsWith("#")) {
			e.preventDefault();
			const targetId = href.substring(1);
			const element = document.getElementById(targetId);
			if (element) {
				window.scrollTo({
					top: element.offsetTop - 80,
					behavior: "smooth",
				});
			}
		}
	};

	return (
		<footer className="relative bg-black text-white pt-20 pb-10 px-6 md:px-0 overflow-hidden">
			{/* Background Image Overlay */}
			<div className="absolute inset-0 z-0">
				<Image
					src="/images/footerbg.png"
					alt="Seafood Background"
					width={1974}
					height={1280}
					className="w-full h-full object-cover opacity-30"
				/>
				<div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
			</div>

			<div className="max-w-7xl mx-auto relative z-10">
				{/* Newsletter Section */}
				<div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-10">
					<div className="md:w-1/2">
						<h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">
							Keep up with the latest
						</h2>
						<p className="text-gray-300 text-lg">
							Join our newsletter to stay up to date on features and releases.
						</p>
					</div>
					<div className="md:w-1/2 w-full max-w-md">
						<h3 className="text-white text-sm font-semibold mb-5 tracking-wide">
							Stay Up to Date with Our Newsletter
						</h3>
						<div className="flex flex-col sm:flex-row gap-3">
							<div className="relative grow">
								<input
									type="email"
									placeholder="Enter your email"
									className="w-full bg-white/10 border border-white/30 rounded-full px-6 py-3.5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/50 backdrop-blur-sm transition-all"
								/>
								<span className="absolute -bottom-6 left-6 text-[11px] text-gray-500">
									By subscribing you agree to our Privacy Policy
								</span>
							</div>
							<button className="rounded-full px-8 py-3.5 bg-white text-black hover:bg-gray-100 font-semibold cursor-pointer transition-all hover:scale-105 active:scale-95 shadow-lg">
								Subscribe
							</button>
						</div>
					</div>
				</div>

				<div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent mb-12"></div>

				{/* Footer Links */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-16 mb-12">
					{/* Brand Column */}
					<div className="col-span-1 md:col-span-2">
						<div className="flex items-center gap-2.5 mb-5">
							<div className="bg-white p-1.5 rounded-lg shadow-lg">
								<Store className="text-black w-5 h-5" />
							</div>
							<span className="text-white font-bold text-2xl">
								Prabhu Traders
							</span>
						</div>
						<p className="text-gray-300 text-base max-w-md mb-6 leading-relaxed">
							Make your complicated sourcing simple. Trusted commodity trading
							partner for 30+ years.
						</p>
					</div>

					{/* Link Columns */}
					{FOOTER_LINKS.map((column, index) => (
						<div key={index} className="col-span-1">
							<h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">
								{column.title}
							</h4>
							<ul className="flex flex-col space-y-4">
								{column.links.map((link, idx) => (
									<li key={idx}>
										<Link
											href={link.href}
											className="w-fit text-gray-300 hover:text-white text-base transition-colors cursor-pointer block relative group"
											onClick={(e) => handleScroll(e, link.href)}
										>
											<span className="relative">
												{link.label}
												<span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
											</span>
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				<div className="h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent mb-12"></div>

				<div className="text-center text-gray-400 text-sm">
					<p>
						&copy; {new Date().getFullYear()} Prabhu Traders. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
