'use client';

import { useState, useEffect, useCallback, useRef, useLayoutEffect } from 'react';
import type { HOW_STEPS } from '@/content/homeContent';

type HowStep = (typeof HOW_STEPS)[number];

export default function HowItWorksSection({ steps }: { steps: readonly HowStep[] }) {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [barKey, setBarKey] = useState(0);
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabButtonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicator, setIndicator] = useState({ x: 0, w: 0 });

  const displayIndex = hovered !== null ? hovered : active;

  const goTo = useCallback((i: number) => {
    setActive(i);
    setBarKey(k => k + 1);
  }, []);

  const advance = useCallback(() => {
    setActive(i => {
      const next = (i + 1) % steps.length;
      return next;
    });
    setBarKey(k => k + 1);
  }, [steps.length]);

  const syncIndicator = useCallback((index: number) => {
    const list = tabListRef.current;
    const btn = tabButtonRefs.current[index];
    if (!list || !btn) return;
    const lr = list.getBoundingClientRect();
    const br = btn.getBoundingClientRect();
    setIndicator({ x: br.left - lr.left, w: br.width });
  }, []);

  useLayoutEffect(() => {
    syncIndicator(displayIndex);
  }, [displayIndex, syncIndicator]);

  useEffect(() => {
    const onResize = () => syncIndicator(displayIndex);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [displayIndex, syncIndicator]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(advance, 4000);
    return () => clearInterval(t);
  }, [paused, advance]);

  return (
    <section className="lp-section" id="how" aria-labelledby="how-heading">
      <div className="container">
        <header className="lp-head">
          <div className="reveal">
            <div className="lp-kicker">
              <span className="lp-dot" aria-hidden="true" />
              How it works
            </div>
            <h2 className="lp-title" id="how-heading">
              Three surfaces. One timeline.
            </h2>
          </div>
          <p className="lp-sub reveal">
            No new dashboard. grít lives where the work happens — commits, edits, and
            end-of-day review. Every signal becomes a searchable note.
          </p>
        </header>

        <div
          className="how2-wrap reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => {
            setPaused(false);
            setHovered(null);
          }}
        >
          <div
            className="how2-tablist"
            ref={tabListRef}
            role="tablist"
            aria-label="How grít works"
          >
            <div
              className="how2-tab-ind"
              aria-hidden="true"
              style={{
                width: indicator.w,
                transform: `translateX(${indicator.x}px)`,
              }}
            />
            {steps.map((s, i) => (
              <button
                key={s.id}
                ref={el => {
                  tabButtonRefs.current[i] = el;
                }}
                role="tab"
                type="button"
                aria-selected={i === displayIndex}
                aria-controls={`how-panel-${s.id}`}
                id={`how-tab-${s.id}`}
                onClick={() => {
                  goTo(i);
                  setHovered(null);
                }}
                onMouseEnter={() => setHovered(i)}
                className={`how2-tab${i === displayIndex ? ' how2-tab--on' : ''}`}
              >
                <span className="how2-tab-num" aria-hidden="true">{s.num}</span>
                {s.title}
              </button>
            ))}
          </div>

          {/* Panels (stacked via CSS grid) */}
          <div className="how2-panels">
            {steps.map((s, i) => (
              <div
                key={s.id}
                id={`how-panel-${s.id}`}
                role="tabpanel"
                aria-labelledby={`how-tab-${s.id}`}
                className={`how2-panel${i === displayIndex ? ' active' : ''}`}
                aria-hidden={i !== displayIndex}
              >
                {/* Left: description */}
                <div>
                  <h3 className="how2-desc-title">{s.title}</h3>
                  <p className="how2-desc-body">{s.body}</p>
                </div>

                {/* Right: terminal preview */}
                <div className="how2-terminal" aria-hidden="true">
                  <div className="how2-tbar">
                    <span className="t-dot t-dot--red" />
                    <span className="t-dot t-dot--yellow" />
                    <span className="t-dot t-dot--green" />
                    <span className="how2-tbar-label">grít · {s.title.toLowerCase()}</span>
                  </div>
                  <div className="how2-tbody">
                    <div className="t-cmd">$ git commit -m &quot;feat: add auth&quot;</div>
                    <div className="t-q">{s.question}</div>
                    <div className="t-ans">▌</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="how2-progress" aria-hidden="true">
            <div
              key={barKey}
              className={`how2-bar${paused ? ' paused' : ''}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
