type SceneryVariant = "emerald" | "sapphire" | "amethyst" | "ember";

type Props = { variant?: SceneryVariant };

/**
 * Decorative background: hero-style green grid + soft color orbs, non-interactive.
 * Parent section should use `home-with-scenery` and keep content in normal flow (z-index handled in CSS).
 */
export default function HomeSectionScenery({ variant = "emerald" }: Props) {
	return (
		<div className={`home-scenery home-scenery--${variant}`} aria-hidden="true">
			<div className="home-scenery__grid" />
			<span className="home-scenery__orb home-scenery__orb--1" />
			<span className="home-scenery__orb home-scenery__orb--2" />
		</div>
	);
}
