import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
		<html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
			<body>{children}</body>
		</html>
	);
}
