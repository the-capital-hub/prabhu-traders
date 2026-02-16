"use client";
import { HERO_SLIDES } from "@/constants/data";
import { motion } from "framer-motion";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";

const HeroSection = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
		Autoplay({ delay: 5000, stopOnInteraction: false }),
	]);
	const [selectedIndex, setSelectedIndex] = useState(0);

	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
		emblaApi.on("select", onSelect);
		onSelect();
	}, [emblaApi, onSelect]);

	const scrollTo = useCallback(
		(index) => {
			if (emblaApi) emblaApi.scrollTo(index);
		},
		[emblaApi]
	);

	return (
		<section id="home" className="relative w-full h-screen overflow-hidden">
			{/* Carousel Container */}
			<div className="overflow-hidden h-full" ref={emblaRef}>
				<div className="flex h-full">
					{HERO_SLIDES.map((slide, index) => (
						<div
							key={index}
							className="relative flex-[0_0_100%] min-w-0 h-full"
						>
							{/* Background Image */}
							<Image
								src={slide.image}
								alt={slide.title}
								fill
								className="object-cover"
								priority={index === 0}
							/>

							{/* Dark Overlay */}
							<div className="absolute inset-0 bg-black/50" />

							{/* Centered Title */}
							<div className="absolute inset-0 flex items-center justify-center z-10 px-6">
								<motion.h1
									key={`title-${index}-${selectedIndex}`}
									initial={{ y: 30, opacity: 0 }}
									animate={
										selectedIndex === index
											? { y: 0, opacity: 1 }
											: { y: 30, opacity: 0 }
									}
									transition={{ duration: 0.8, ease: "easeOut" }}
									className="text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center max-w-5xl leading-tight drop-shadow-lg"
								>
									{slide.title}
								</motion.h1>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Navigation Arrows */}
			<button
				className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white/30 transition-all"
				onClick={() => emblaApi?.scrollPrev()}
				aria-label="Previous slide"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className="w-5 h-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M15.75 19.5L8.25 12l7.5-7.5"
					/>
				</svg>
			</button>
			<button
				className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center text-white hover:bg-white/30 transition-all"
				onClick={() => emblaApi?.scrollNext()}
				aria-label="Next slide"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={2}
					stroke="currentColor"
					className="w-5 h-5"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M8.25 4.5l7.5 7.5-7.5 7.5"
					/>
				</svg>
			</button>

			{/* Dot Indicators */}
			<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
				{HERO_SLIDES.map((_, index) => (
					<button
						key={index}
						onClick={() => scrollTo(index)}
						className={`rounded-full transition-all duration-300 ${selectedIndex === index
								? "w-8 h-3 bg-white"
								: "w-3 h-3 bg-white/50 hover:bg-white/70"
							}`}
						aria-label={`Go to slide ${index + 1}`}
					/>
				))}
			</div>
		</section>
	);
};

export default HeroSection;
