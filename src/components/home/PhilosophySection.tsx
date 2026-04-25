export default function PhilosophySection() {
	return (
		<section className="lp-section" id="friction" aria-labelledby="friction-heading">
			<div className="container">
				<div className="phil2-statement reveal">
					<div
						className="lp-kicker"
						style={{ justifyContent: "center", display: "inline-flex" }}
					>
						<span className="lp-dot" aria-hidden="true" />
						Design Philosophy
					</div>
					<h2 className="phil2-headline" id="friction-heading">
						Stop avoiding friction.
						<br />
						<span className="phil2-accent">Start embracing it.</span>
					</h2>
					<p className="phil2-sub">
						As engineers, we&apos;re obsessed with speed. We automate everything to reach
						zero friction which often leads to zero reflection. grít turns the
						&ldquo;moments of resistance&rdquo; into your most valuable creative signals.
					</p>
				</div>

				<div className="phil2-grid">
					<div className="phil2-card reveal">
						<div className="phil2-card-head">
							<span className="phil2-num">01</span>
							<span className="phil2-badge">Cognitive</span>
						</div>
						<h3>Capture the struggle</h3>
						<p>
							The moment you hesitate is the moment you&apos;re actually learning. grít
							captures the &ldquo;why&rdquo; behind the hard decisions before the
							context disappears into the void.
						</p>
					</div>

					<div className="phil2-card reveal">
						<div className="phil2-card-head">
							<span className="phil2-num">02</span>
							<span className="phil2-badge">Mechanical</span>
						</div>
						<h3>Purposeful Pause</h3>
						<p>
							A deliberate prompt after a large AI paste or a 40-minute rabbit hole
							isn&apos;t a hurdle — it&apos;s a guardrail that ensures your codebase
							remains an intentional investment.
						</p>
					</div>

					<div className="phil2-card reveal">
						<div className="phil2-card-head">
							<span className="phil2-num">03</span>
							<span className="phil2-badge">Social</span>
						</div>
						<h3>Audit Trail of Thought</h3>
						<p>
							Commit messages document <em>what</em> changed. grít documents{" "}
							<em>what you were thinking</em>. Build a searchable timeline of your
							evolution as an engineer.
						</p>
					</div>
				</div>
				<div className="phil2-quotes reveal">
					<blockquote className="phil2-quote">
						&ldquo;The best time to document a decision is the moment you&apos;re making
						it.&rdquo;
					</blockquote>
					<blockquote className="phil2-quote">
						&ldquo;Friction at the right moment is the difference between a commit message
						and an audit trail.&rdquo;
					</blockquote>
				</div>
			</div>
		</section>
	);
}
