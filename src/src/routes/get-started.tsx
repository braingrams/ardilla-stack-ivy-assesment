import { FooterBanner } from "../components/FooterBanner";
import { FaqSection } from "../components/GetStarted/FaqSection";
import { HowItWorks } from "../components/GetStarted/HowItWorks";
import { InterestSection } from "../components/GetStarted/InterestSection";
import { MainHero } from "../components/GetStarted/MainHero";
import { Footer } from "../components/layout/Footer";

export const GetStarted = () => {
	return (
		<>
			<MainHero />
			<InterestSection />
			<HowItWorks />
			<FaqSection />
			<FooterBanner />
			<Footer />
		</>
	);
};
