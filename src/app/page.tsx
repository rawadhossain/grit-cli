import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HomeClient from "./HomeClient";
import HeroSection from "@/components/home/HeroSection";
import PainSection from "@/components/home/PainSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import SignalsSection from "@/components/home/SignalsSection";
import QuickstartSection from "@/components/home/QuickstartSection";
import StarCtaSection from "@/components/home/StarCtaSection";
import { FEATURES, HOW_STEPS, PAIN, SIGNALS } from "@/content/homeContent";

export const metadata: Metadata = {
	title: "grít",
	description:
		"grít hooks into your git workflow and file editor to capture hard decisions, vague names, AI-assisted pastes and reverts — building a local-first, searchable timeline of your thinking.",
	openGraph: {
		title: "grít",
		description:
			"Local-first developer friction logger. git hooks that never block commits. SQLite stored on your machine.",
		url: "https://grítcli.dev",
	},
};

export default function HomePage() {
	return (
		<>
			<NavBar />

			<HeroSection />
			<PainSection items={PAIN} />
			<PhilosophySection />
			<HowItWorksSection steps={HOW_STEPS} />
			<FeaturesSection items={FEATURES} />
			<SignalsSection items={SIGNALS} />
			<QuickstartSection />
			<StarCtaSection />

			<Footer />
			<HomeClient />
		</>
	);
}
