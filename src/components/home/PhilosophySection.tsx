export default function PhilosophySection() {
  return (
    <section className="lp-section" id="friction" aria-labelledby="friction-heading">
      <div className="container">
        <div className="phil2-statement reveal">
          <div className="lp-kicker" style={{ justifyContent: 'center', display: 'inline-flex' }}>
            <span className="lp-dot" aria-hidden="true" />
            Purposeful friction
          </div>
          <h2 className="phil2-headline" id="friction-heading">
            Most tools optimize for speed.
            <br />
            <span className="phil2-accent">grít optimizes for clarity.</span>
          </h2>
          <p className="phil2-sub">
            Thoughtless commits compound into unmaintainable systems. A 30-second pause at the
            right moment changes what happens months later.
          </p>
        </div>

        <div className="phil2-grid">
          <div className="phil2-card reveal">
            <span className="phil2-num">01</span>
            <h3>Pause at friction</h3>
            <p>
              grít intercepts the high-signal moments — commits, pastes, reverts, rabbit holes — not
              constant interruption.
            </p>
          </div>

          <div className="phil2-card reveal">
            <span className="phil2-num">02</span>
            <h3>Reflect in seconds</h3>
            <p>
              One question. One answer. Logged locally and searchable — no dashboard, no cloud, no
              account.
            </p>
          </div>

          <div className="phil2-card reveal">
            <span className="phil2-num">03</span>
            <h3>Grow over time</h3>
            <p>
              A private engineering journal that builds itself automatically through your everyday
              workflow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
