"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import HeroInstallDropdown from "@/components/home/HeroInstallDropdown";
import TerminalDemo from "@/components/TerminalDemo";

export default function HeroSection() {
	const spotlightRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const spotlight = spotlightRef.current;
		if (!spotlight) return;

		const onMove = (e: MouseEvent) => {
			const { clientX, clientY } = e;
			spotlight.style.setProperty("--x", `${clientX}px`);
			spotlight.style.setProperty("--y", `${clientY}px`);
		};

		window.addEventListener("mousemove", onMove);
		return () => {
			window.removeEventListener("mousemove", onMove);
		};
	}, []);

	return (
		<section className="hero-v2" id="hero" aria-label="Hero">
			<div className="hero-v2-bg">
				<div className="hero-v2-grid" aria-hidden="true" />
				<div className="hero-v2-orb hero-v2-orb--1" aria-hidden="true" />
				<div className="hero-v2-orb hero-v2-orb--2" aria-hidden="true" />
				<div className="hero-v2-orb hero-v2-orb--3" aria-hidden="true" />
				<div ref={spotlightRef} className="hero-v2-spotlight" aria-hidden="true" />
			</div>

			<div className="container">
				<div className="hero-v2-content">
					<div className="hero-v2-left">
						<div className="hero-v2-badge">
							<svg
								width="12"
								height="12"
								viewBox="0 0 12 12"
								fill="none"
								aria-hidden="true"
							>
								<circle cx="6" cy="6" r="6" fill="currentColor" opacity="0.2" />
								<circle cx="6" cy="6" r="3" fill="currentColor">
									<animate
										attributeName="opacity"
										values="0.3;1;0.3"
										dur="2s"
										repeatCount="indefinite"
									/>
								</circle>
							</svg>
							<span>Developer Friction Logger</span>
						</div>

						<h2 className="hero-v2-title">
							<span className="hero-v2-title-line">Stop losing</span>
							<span className="hero-v2-title-gradient">your thinking</span>
							<span className="hero-v2-title-line">to the void</span>
						</h2>

						<p className="hero-v2-sub">
							Grít is a CLI tool that turns your commits into a knowledge base. By
							introducing small, purposeful friction at the moments that matter - a
							commit, a dependency, a revert - it captures the thinking behind your
							code, not just the code itself.
						</p>

						<div className="hero-v2-trust" aria-label="grít properties">
							<div className="hero-v2-trust-item">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									aria-hidden="true"
								>
									<path
										d="M13.5 4L6 11.5L2.5 8"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<span>Hooks always exit 0</span>
							</div>
							<div className="hero-v2-trust-item">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									aria-hidden="true"
								>
									<path
										d="M13.5 4L6 11.5L2.5 8"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<span>Local-first SQLite</span>
							</div>
							<div className="hero-v2-trust-item">
								<svg
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none"
									aria-hidden="true"
								>
									<path
										d="M13.5 4L6 11.5L2.5 8"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
								<span>Watcher is opt-in</span>
							</div>
						</div>

						<div className="hero-v2-actions">
							<HeroInstallDropdown />
							<div className="hero-docs-wrapper">
								<a
									href="/docs"
									className="hero-v2-btn hero-v2-btn--ghost hero-docs-btn"
								>
									<span>Read the docs</span>
									<svg
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										aria-hidden="true"
									>
										<path
											d="M6 3L11 8L6 13"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</a>
								<DocsPreview />
							</div>
						</div>
					</div>

					<div className="hero-v2-right">
						<div className="hero-v2-terminal-wrap">
							<div className="hero-v2-terminal-glow" aria-hidden="true" />
							<TerminalDemo />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function DocsPreview() {
	const isDesktop = useSyncExternalStore(
		(callback) => {
			if (typeof window === "undefined") return () => {};
			window.addEventListener("resize", callback);
			return () => window.removeEventListener("resize", callback);
		},
		() => window.innerWidth > 900,
		() => false,
	);

	if (!isDesktop) return null;

	return (
		<div className="hero-docs-preview" aria-hidden="true">
			<div className="hero-docs-preview-inner">
				<iframe
					src="/docs"
					title="Docs Preview"
					tabIndex={-1}
					className="hero-docs-iframe"
				/>
			</div>
		</div>
	);
}
