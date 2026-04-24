'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type DocsSection = { id: string; label: string };

const SECTION_GROUPS = [
  {
    title: 'Getting Started',
    items: ['installation', 'initialization', 'commit-interview'],
  },
  {
    title: 'Core Workflows',
    items: ['pausing-and-disabling', 'real-time-file-watcher', 'viewing-your-log'],
  },
  {
    title: 'Advanced Features',
    items: ['recording-decisions', 'revert-post-mortems', 'end-of-day-reflection', 'statistics', 'exporting-data'],
  },
  {
    title: 'Reference',
    items: ['configuration', 'database-reference', 'git-hooks-reference', 'answer-tagging', 'complexity-scoring', 'windows-notes'],
  },
] as const;

export default function DocsSidebar({ sections }: { sections: DocsSection[] }) {
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const headings = sections.map(s => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-80px 0px -65% 0px', threshold: 0 }
    );

    headings.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [sections]);

  const handleClick = () => setOpen(false);

  const sectionMap = new Map(sections.map(s => [s.id, s.label]));

  return (
    <>
      {/* Mobile toggle */}
      <button
        className="docs-toggle"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        aria-controls="docs-sidebar"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M2 4h12M2 8h12M2 12h12" strokeLinecap="round" />
        </svg>
        <span>{open ? 'Hide' : 'Show'} navigation</span>
      </button>

      <aside
        id="docs-sidebar"
        className={`docs-nav${open ? ' docs-nav--open' : ''}`}
        aria-label="Documentation navigation"
      >
        <Link href="/" className="docs-nav-logo" onClick={handleClick}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.3" />
            <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="currentColor" />
          </svg>
          <span>gr<span className="docs-nav-logo-accent">í</span>t</span>
        </Link>

        <nav className="docs-nav-sections">
          {SECTION_GROUPS.map(group => {
            const groupItems = group.items
              .map(id => sections.find(s => s.id === id))
              .filter((s): s is DocsSection => s !== undefined);

            if (groupItems.length === 0) return null;

            return (
              <div key={group.title} className="docs-nav-group">
                <div className="docs-nav-group-title">{group.title}</div>
                {groupItems.map(s => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className={`docs-nav-link${active === s.id ? ' docs-nav-link--active' : ''}`}
                    onClick={handleClick}
                    aria-current={active === s.id ? 'location' : undefined}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            );
          })}
        </nav>

        <div className="docs-nav-footer">
          <a
            href="https://github.com/AlchemistReturns/grit"
            className="docs-nav-github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
            </svg>
            <span>View on GitHub</span>
          </a>
        </div>
      </aside>
    </>
  );
}
