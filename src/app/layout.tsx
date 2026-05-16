import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-jetbrains",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://grit-cli.vercel.app"),
	title: {
		default: "grít",
		template: "%s — grít",
	},
	description:
		"grít hooks into your git workflow and file editor to capture the moments that slow you down — hard decisions, vague names, AI-assisted pastes, reverts — and builds a searchable timeline of your thinking. Local-first SQLite, no network calls, hooks always exit 0.",
	keywords: [
		"git hooks",
		"developer workflow",
		"local SQLite",
		"developer tools",
		"CLI",
		"friction logger",
		"google analytics integration",
	],
	openGraph: {
		siteName: "grít",
		type: "website",
	},
	icons: {
		icon: "/icon.svg",
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} data-scroll-behavior="smooth">
			<body>
				{children}
				{process.env.NEXT_PUBLIC_GA_ID && (
					<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
				)}
			</body>
		</html>
	);
}
