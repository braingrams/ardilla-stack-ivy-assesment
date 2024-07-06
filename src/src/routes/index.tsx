import { AccessSection } from "../components/AccessSection";
import { ExpectSection } from "../components/ExpectSection";
import { FooterBanner } from "../components/FooterBanner";
import { Hero } from "../components/Hero";
import { InvestmentSection } from "../components/InvestmentSection";
import { Footer } from "../components/layout/Footer";
import { TestimonialSection } from "../components/TestimonialSection";

export const Home = () => {
	return (
		<>
			<Hero />
			<ExpectSection />
			<AccessSection />
			<InvestmentSection />
			<TestimonialSection />
			<FooterBanner />
			<Footer />
		</>
	);
};
