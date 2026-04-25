import HomeSectionScenery from "@/components/home/HomeSectionScenery";

type Feature = {
  id: string;
  title: string;
  body: string;
  tags: readonly string[];
  wide?: boolean;
};

export default function FeaturesSection({ items }: { items: readonly Feature[] }) {
  // Duplicate for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <section className="lp-section home-with-scenery" id="features" aria-labelledby="features-heading">
      <HomeSectionScenery variant="emerald" />
      <div className="container">
        <header className="lp-head">
          <div className="reveal">
            <div className="lp-kicker">
              <span className="lp-dot" aria-hidden="true" />
              Capabilities
            </div>
            <h2 className="lp-title" id="features-heading">
              Everything grít does, automatically
            </h2>
          </div>
          <p className="lp-sub reveal">
            Not telemetry. Not a team dashboard. The smallest prompts at the moments that matter —
            stored locally, queryable anytime.
          </p>
        </header>
      </div>

      {/* Full-width marquee — no JS, CSS only. Hover to pause. */}
      <div
        className="marquee-shell"
        aria-label="Feature cards — scroll to explore"
        title="Hover to pause"
      >
        <div className="marquee-track" aria-hidden="true">
          {doubled.map((f, i) => (
            <div key={`${f.id}-${i}`} className="marquee-card">
              <div className="marquee-card-title">{f.title}</div>
              <p className="marquee-card-body">{f.body}</p>
              <div className="marquee-card-tags">
                {f.tags.map(t => (
                  <span key={t} className="pill">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible static list (visually hidden, readable by screen readers) */}
      <ul className="sr-only">
        {items.map(f => (
          <li key={f.id}>
            <strong>{f.title}</strong>: {f.body}
          </li>
        ))}
      </ul>
    </section>
  );
}
