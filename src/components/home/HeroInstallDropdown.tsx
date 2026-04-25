"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import {
	detectGritInstallPlatform,
	GRIT_INSTALL_ROWS,
	type GritInstallPlatformId,
} from "@/lib/grit-install-downloads";

function WindowsIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
			<path
				d="M2 4.2L8.4 3.3V8.75H2V4.2ZM9.6 3.15L16 2.2V8.75H9.6V3.15ZM2 9.75H8.4V15.15L2 14.25V9.75ZM9.6 9.75H16V15.8L9.6 14.85V9.75Z"
				fill="currentColor"
			/>
		</svg>
	);
}

function AppleIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
			<path
				d="M12.28 2.15c.05 1.45-.75 2.55-1.65 3.15-.85.55-1.85.45-2.45.15.2-1.35.95-2.45 1.85-3.05.45-.3 1.45-.85 2.25-.25zm1.35 10.45c-.35.8-.75 1.55-1.2 2.25-.65 1-1.35 2-2.35 2-.85 0-1.2-.55-2.25-.55-1.1 0-1.45.55-2.3.55-1 0-1.75-.95-2.4-1.95-1.35-2-1.5-4.35-.65-5.6.6-.9 1.55-1.4 2.45-1.4.9 0 1.45.55 2.2.55.7 0 1.15-.55 2.2-.55.75 0 1.55.4 2.15 1.1-1.85.95-1.55 3.5.35 4.15z"
				fill="currentColor"
			/>
		</svg>
	);
}

function LinuxIcon() {
	return (
		<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
			<path
				d="M8.5 2.5c-1.9 0-3.5 1.6-3.5 3.5v3.2c0 .4-.2.8-.5 1.1l-.7.7c-.3.3-.5.7-.5 1.1v.4c0 .6.4 1 1 1h2.4c.3.6.9 1 1.6 1h1.4c.7 0 1.3-.4 1.6-1h1.4c.6 0 1-.4 1-1v-.4c0-.4-.2-.8-.5-1.1l-.7-.7c-.3-.3-.5-.7-.5-1.1V6c0-1.9-1.6-3.5-3.5-3.5z"
				stroke="currentColor"
				strokeWidth="1.3"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill="none"
			/>
			<path
				d="M6 14.5v1.5M9 14.5v1.5M12 14.5v1.5"
				stroke="currentColor"
				strokeWidth="1.2"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function PlatformIcon({ id }: { id: GritInstallPlatformId }) {
	if (id === "windows") return <WindowsIcon />;
	if (id === "linux") return <LinuxIcon />;
	return <AppleIcon />;
}

function DownloadGlyph() {
	return (
		<svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
			<path
				d="M9 3V12M9 12L6 9M9 12L12 9M3 15H15"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

export default function HeroInstallDropdown() {
	const [open, setOpen] = useState(false);
	const [recommend, setRecommend] = useState<GritInstallPlatformId | null>(null);
	const wrapRef = useRef<HTMLDivElement>(null);
	const triggerRef = useRef<HTMLButtonElement>(null);
	const id = useId();
	const regionId = `${id}-region`;
	const labelId = `${id}-label`;

	useLayoutEffect(() => {
		setRecommend(detectGritInstallPlatform());
	}, []);

	const close = useCallback(() => setOpen(false), []);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				e.preventDefault();
				close();
				queueMicrotask(() => triggerRef.current?.focus());
			}
		};
		const onPointer = (e: PointerEvent) => {
			if (!wrapRef.current?.contains(e.target as Node)) {
				close();
			}
		};
		document.addEventListener("keydown", onKey);
		document.addEventListener("pointerdown", onPointer, true);
		return () => {
			document.removeEventListener("keydown", onKey);
			document.removeEventListener("pointerdown", onPointer, true);
		};
	}, [open, close]);

	return (
		<div ref={wrapRef} className="hero-v2-install">
			<button
				ref={triggerRef}
				type="button"
				id="hero-install"
				className="hero-v2-btn hero-v2-btn--primary hero-v2-install-trigger"
				aria-haspopup="true"
				aria-expanded={open}
				aria-controls={regionId}
				aria-labelledby={labelId}
				onClick={() => setOpen((o) => !o)}
			>
				<span className="hero-v2-install-cta" id={labelId}>
					<span className="hero-v2-btn-icon" aria-hidden="true">
						<DownloadGlyph />
					</span>
					<span>Install grít</span>
				</span>
				<svg
					className="hero-v2-install-chevron"
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					aria-hidden="true"
					data-open={open || undefined}
				>
					<path
						d="M4 6L8 10L12 6"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>

			<div
				id={regionId}
				role="region"
				aria-label="Download grít for your platform"
				className="hero-v2-install-panel"
				data-state={open ? "open" : "closed"}
				hidden={!open}
			>
				<div className="hero-v2-install-panel-inner">
					<nav className="hero-v2-install-list" aria-label="Platform downloads">
						{GRIT_INSTALL_ROWS.map((row) => {
							const isRec = recommend === row.id;
							return (
								<a
									key={row.id}
									href={row.href}
									download={row.filename}
									target="_blank"
									rel="noopener noreferrer"
									className={
										"hero-v2-install-item" +
										(isRec ? " hero-v2-install-item--rec" : "")
									}
									onClick={close}
								>
									<span className="hero-v2-install-item-icon" aria-hidden="true">
										<PlatformIcon id={row.id} />
									</span>
									<span className="hero-v2-install-item-text">
										<span className="hero-v2-install-item-title">
											{row.label}
											{isRec && (
												<span
													className="hero-v2-install-pill"
													aria-hidden="true"
												>
													For you
												</span>
											)}
										</span>
										<span className="hero-v2-install-item-sub">
											{row.sublabel}
										</span>
									</span>
									<svg
										className="hero-v2-install-item-arrow"
										width="16"
										height="16"
										viewBox="0 0 16 16"
										fill="none"
										aria-hidden="true"
									>
										<path
											d="M6 3L11 8L6 13"
											stroke="currentColor"
											strokeWidth="1.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
									</svg>
								</a>
							);
						})}
					</nav>
					{/* <Link href="/docs#installation" className="hero-v2-install-docs" onClick={close}>
						Other install options
					</Link> */}
				</div>
			</div>
		</div>
	);
}
