"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants/data";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Store, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const Navbar = () => {
	const { scrollY } = useScroll();
	const [hidden, setHidden] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useMotionValueEvent(scrollY, "change", (latest) => {
		const previous = scrollY.getPrevious();
		if (latest > previous && latest > 150) {
			setHidden(true);
			setIsMobileMenuOpen(false); // Close mobile menu on scroll down
		} else {
			setHidden(false);
		}
	});

	return (
		<motion.header
			variants={{
				visible: { y: 0 },
				hidden: { y: "-100%" },
			}}
			animate={hidden ? "hidden" : "visible"}
			transition={{ duration: 0.35, ease: "easeInOut" }}
			className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md"
		>
			<div className="flex items-center justify-between px-6 py-4 md:px-12 max-w-7xl mx-auto">
				<div className="flex items-center gap-2">
					<div className="bg-blue-600 p-1 rounded-md">
						<Store className="text-white w-5 h-5" />
					</div>
					<span className="text-blue-600 font-bold text-lg">
						Prabhu Traders
					</span>
				</div>

				<div className="hidden md:flex items-center bg-black/80 rounded-full px-1 py-1 text-white">
					{NAV_LINKS.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className={`px-5 py-2 rounded-full text-sm transition-colors hover:bg-white/10 ${
								index === 0
									? "bg-white text-black font-medium"
									: "text-gray-300"
							}`}
						>
							{link.label}
						</Link>
					))}
				</div>

				<div className="hidden md:flex items-center gap-4">
					<Link href="#" className="text-sm font-medium hover:underline">
						Sign In
					</Link>
					<Button variant="outline" className="rounded-full px-6">
						Sign up Free
					</Button>
				</div>

				{/* Mobile Menu Toggle */}
				<button
					className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					{isMobileMenuOpen ? (
						<X className="w-6 h-6" />
					) : (
						<Menu className="w-6 h-6" />
					)}
				</button>
			</div>

			{/* Mobile Menu Dropdown */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
					>
						<div className="flex flex-col px-6 py-4 space-y-4">
							{NAV_LINKS.map((link, index) => (
								<Link
									key={index}
									href={link.href}
									className="text-gray-600 hover:text-black font-medium py-2 transition-colors"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									{link.label}
								</Link>
							))}
							<div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
								<Link
									href="#"
									className="text-center py-2 font-medium text-gray-600 hover:text-black"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Sign In
								</Link>
								<Button
									className="w-full rounded-full bg-black text-white hover:bg-gray-800"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									Sign up Free
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.header>
	);
};

export default Navbar;
