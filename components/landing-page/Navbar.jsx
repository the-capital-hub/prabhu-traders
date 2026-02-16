"use client";
import Link from "next/link";
import { NAV_LINKS } from "@/constants/data";
import { Store, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
	const { scrollY } = useScroll();
	const [scrolled, setScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeLink, setActiveLink] = useState("#home");

	useMotionValueEvent(scrollY, "change", (latest) => {
		setScrolled(latest > 100);
	});

	useEffect(() => {
		const handleScroll = () => {
			const sections = NAV_LINKS.map((link) => link.href.substring(1));
			const scrollPosition = window.scrollY;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					if (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					) {
						setActiveLink(`#${section}`);
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (e, href) => {
		e.preventDefault();
		const targetId = href.substring(1);
		const element = document.getElementById(targetId);
		if (element) {
			window.scrollTo({
				top: element.offsetTop - 80,
				behavior: "smooth",
			});
			setActiveLink(href);
			setIsMobileMenuOpen(false);
		}
	};

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled || isMobileMenuOpen
					? "bg-white/90 backdrop-blur-md shadow-sm py-4"
					: "bg-transparent py-6"
				}`}
		>
			<div className="flex items-center justify-between px-6 md:px-12">
				<div
					className="flex items-center gap-2 cursor-pointer"
					onClick={(e) => scrollToSection(e, "#home")}
				>
					<div className={`p-1 rounded-md transition-colors duration-500 ${scrolled || isMobileMenuOpen ? "bg-black" : "bg-white"}`}>
						<Store className={`w-5 h-5 transition-colors duration-500 ${scrolled || isMobileMenuOpen ? "text-white" : "text-black"}`} />
					</div>
					<span className={`font-bold text-lg transition-colors duration-500 ${scrolled || isMobileMenuOpen ? "text-black" : "text-white"}`}>
						Prabhu Traders
					</span>
				</div>

				<div className={`hidden md:flex items-center rounded-full px-1 py-1 transition-all duration-500 ${scrolled
						? "bg-black/80 text-white"
						: "bg-white/10 backdrop-blur-sm text-white border border-white/20"
					}`}>
					{NAV_LINKS.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							onClick={(e) => scrollToSection(e, link.href)}
							className={`px-5 py-2 rounded-full text-sm transition-all duration-300 hover:bg-white/10 ${activeLink === link.href
									? scrolled
										? "bg-white text-black font-medium"
										: "bg-white/25 text-white font-medium"
									: "text-gray-300 hover:text-white"
								}`}
						>
							{link.label}
						</Link>
					))}
				</div>

				{/* Empty div to balance the flex layout */}
				<div className="hidden md:block w-35"></div>

				{/* Mobile Menu Toggle */}
				<button
					className={`md:hidden p-2 rounded-full transition-colors ${scrolled || isMobileMenuOpen
							? "text-gray-600 hover:bg-gray-100"
							: "text-white hover:bg-white/10"
						}`}
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
									className={`font-medium py-2 transition-colors ${activeLink === link.href
											? "text-black bg-gray-100 px-4 rounded-lg"
											: "text-gray-600 hover:text-black"
										}`}
									onClick={(e) => scrollToSection(e, link.href)}
								>
									{link.label}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Navbar;
