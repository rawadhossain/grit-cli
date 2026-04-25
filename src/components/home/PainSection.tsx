import type { PAIN } from '@/content/homeContent';

type PainItem = (typeof PAIN)[number];

export default function PainSection({ items }: { items: readonly PainItem[] }) {
  return (
    <section className="pain-v2" id="why" aria-labelledby="pain-heading">
      <div className="container">
        <header className="pain-v2-header reveal">
          <div className="pain-v2-kicker">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
              <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="2" />
            </svg>
            <span>The Problem</span>
          </div>
          <h2 className="pain-v2-title" id="pain-heading">
            The knowledge you need most
            <br />
            <span className="pain-v2-title-gradient">is the first thing you lose</span>
          </h2>
          <p className="pain-v2-sub">
            grít is built for the moments that never make it into git history: the wrong turns,
            the uncertain assumptions, the AI paste you didn&apos;t fully internalize, the revert
            you don&apos;t want to talk about.
          </p>
        </header>

        <div className="pain-v2-grid" aria-label="Developer pain points">
          {items.map((card, idx) => (
            <article key={card.id} id={card.id} className="pain-v2-card reveal">
              <div className="pain-v2-card-header">
                <div className="pain-v2-num">{String(idx + 1).padStart(2, '0')}</div>
                <svg
                  className="pain-v2-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
                  <path d="M10 6V10L13 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3 className="pain-v2-card-title">{card.title}</h3>
              <p className="pain-v2-card-body">{card.body}</p>
              <div className="pain-v2-card-accent" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
