import Navbar from "@/components/landing-page/Navbar";
import HeroSection from "@/components/landing-page/HeroSection";
import StatsSection from "@/components/landing-page/StatsSection";
import AboutUs from "@/components/landing-page/AboutUs";
import ProductCategories from "@/components/landing-page/ProductCategories";
import TradingProcess from "@/components/landing-page/TradingProcess";
import IndustriesServed from "@/components/landing-page/IndustriesServed";
import QualityAssurance from "@/components/landing-page/QualityAssurance";
import GlobalReach from "@/components/landing-page/GlobalReach";
import Testimonials from "@/components/landing-page/Testimonials";
import ContactCTA from "@/components/landing-page/ContactCTA";
import Footer from "@/components/landing-page/Footer";

export default function Home() {
	return (
		<main className="min-h-screen bg-white font-sans">
			<Navbar />
			<HeroSection />
			<StatsSection />
			<AboutUs />
			<ProductCategories />
			<TradingProcess />
			<IndustriesServed />
			<QualityAssurance />
			<GlobalReach />
			<Testimonials />
			<ContactCTA />
			<Footer />
		</main>
	);
}
