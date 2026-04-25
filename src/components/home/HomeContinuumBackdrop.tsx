/** One full-height decorative layer (grid + orbs) for the flow below the hero. */
export default function HomeContinuumBackdrop() {
	return (
		<div className="home-continuum" aria-hidden="true">
			<div className="home-continuum__grid" />
			<span className="home-continuum__orb home-continuum__orb--1" />
			<span className="home-continuum__orb home-continuum__orb--2" />
		</div>
	);
}
