import type { Metadata } from "next";
import { readFile } from "node:fs/promises";
import path from "node:path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

import Link from "next/link";
import NavBar from "@/components/NavBar";
import DocsSidebar from "@/components/DocsSidebar";
import Footer from "@/components/Footer";
import { slugifyHeading } from "@/lib/slug";

export const metadata: Metadata = {
	title: { absolute: "grit docs" },
	description:
		"Complete command, config, and behavior reference for grít — the developer friction logger. Installation, git hooks, watcher signals, configuration, database schema.",
	openGraph: {
		title: "grit docs",
		description:
			"Complete command, config, and behavior reference. git hooks always exit 0. Local-first SQLite.",
	},
};

export default async function DocsPage() {
	const mdPath = path.join(process.cwd(), "src", "content", "docs.md");
	const markdown = await readFile(mdPath, "utf8");
	const sections = markdown
		.split("\n")
		.map((line) => line.match(/^##\s+(.*)\s*$/))
		.filter(Boolean)
		.map((m) => {
			const label = (m as RegExpMatchArray)[1].trim();
			return { id: slugifyHeading(label), label };
		})
		.filter((s) => s.id !== "table-of-contents");

	return (
		<>
			<NavBar />

			<div className="docs-shell">
				<DocsSidebar sections={sections} />

				<div className="docs-main-wrap">
					{/* Breadcrumb */}
					<div className="docs-breadcrumb">
						<Link href="/" className="docs-breadcrumb-link">
							Home
						</Link>
						<svg
							width="14"
							height="14"
							viewBox="0 0 16 16"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							aria-hidden="true"
						>
							<path d="M6 3L11 8L6 13" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						<span className="docs-breadcrumb-current">Documentation</span>
					</div>

					<main className="docs-body" id="docs-main">
						<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
							{markdown}
						</ReactMarkdown>

						{/* Page footer nav */}
						<div className="docs-page-nav">
							<Link href="/" className="docs-page-nav-link">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									aria-hidden="true"
								>
									<path
										d="M10 3L5 8L10 13"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<span>Back to Home</span>
							</Link>
							<a
								href="https://github.com/AlchemistReturns/grit"
								className="docs-page-nav-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span>View on GitHub</span>
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									aria-hidden="true"
								>
									<path
										d="M6 3L11 8L6 13"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</a>
						</div>
					</main>
				</div>
			</div>

			<Footer />
		</>
	);
}
