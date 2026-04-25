import type { SIGNALS } from '@/content/homeContent';
import HomeSectionScenery from '@/components/home/HomeSectionScenery';

type Signal = (typeof SIGNALS)[number];

export default function SignalsSection({ items }: { items: readonly Signal[] }) {
  return (
    <section className="lp-section home-with-scenery" id="signals" aria-labelledby="signals-heading">
      <HomeSectionScenery variant="sapphire" />
      <div className="container">
        <header className="lp-head">
          <div className="reveal">
            <div className="lp-kicker">
              <span className="lp-dot" aria-hidden="true" />
              Signals
            </div>
            <h2 className="lp-title" id="signals-heading">
              What grít detects while you work
            </h2>
          </div>
          <p className="lp-sub reveal">
            Small, timely moments of reflection. Every threshold is configurable in{' '}
            <code>.grit.yaml</code>.
          </p>
        </header>

        <div className="sig-grid" aria-label="Friction signals">
          {items.map(s => (
            <article
              key={s.badge}
              className={`sig-card sig-card--${s.color} reveal`}
            >
              <div className="sig-card-header">
                <span className={`sbadge sbadge--${s.color}`}>{s.badge}</span>
              </div>
              <p className="sig-trigger">{s.trigger}</p>
              <p className="sig-question">{s.question}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
