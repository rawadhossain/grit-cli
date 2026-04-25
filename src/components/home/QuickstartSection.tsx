import HomeSectionScenery from '@/components/home/HomeSectionScenery';

const STEPS = [
  {
    num: '01',
    title: 'Install',
    code: `# macOS / Linux
go install github.com/alchemistreturns/grit@latest

# Windows (MSYS2 — needed for SQLite/GCC)
pacman -S mingw-w64-ucrt-x86_64-gcc
PATH="/c/msys64/ucrt64/bin:$PATH" \\
  go install github.com/alchemistreturns/grit@latest`,
    note: 'First build is slower (compiling SQLite). All subsequent builds are instant.',
  },
  {
    num: '02',
    title: 'Initialize',
    code: `cd your-project
grit init`,
    note: 'Creates .grit.yaml, .grit/store.db, and installs git hooks. Safe to re-run.',
  },
  {
    num: '03',
    title: 'Work normally',
    code: `# Terminal 1 — start the watcher
grit watch

# Terminal 2 — commit as usual
git commit -m "feat: add auth"`,
    note: 'Prompts appear at the right moments. Commits are never blocked — grít always exits 0.',
  },
  {
    num: '04',
    title: 'Review your friction',
    code: `grit reflect      # end-of-day summary
grit stats week   # 12-week heatmap + tags
grit log          # searchable friction log`,
    note: 'Turn today\'s friction into a weekly pattern. Export to Markdown any time.',
  },
] as const;

/** Comments (# … or trailing  # …) vs shell commands (accent), so blocks are scannable. */
function QuickstartCode({ code }: { code: string }) {
  const lines = code.split('\n');
  return (
    <pre className="qs2-code">
      <code>
        {lines.map((line, i) => (
          <span key={i}>
            {renderQuickstartLine(line)}
            {i < lines.length - 1 ? '\n' : null}
          </span>
        ))}
      </code>
    </pre>
  );
}

function renderQuickstartLine(line: string) {
  const trimmed = line.trim();
  if (trimmed === '') {
    return null;
  }
  if (trimmed.startsWith('#')) {
    return <span className="qs2-cmt">{line}</span>;
  }
  const cut = line.indexOf(' #');
  if (cut > 0) {
    return (
      <>
        <span className="qs2-cmd">{line.slice(0, cut)}</span>
        <span className="qs2-cmt">{line.slice(cut)}</span>
      </>
    );
  }
  return <span className="qs2-cmd">{line}</span>;
}

export default function QuickstartSection() {
  return (
    <section className="lp-section home-with-scenery" id="quickstart" aria-labelledby="qs-heading">
      <HomeSectionScenery variant="emerald" />
      <div className="container">
        <header className="lp-head">
          <div className="reveal">
            <div className="lp-kicker">
              <span className="lp-dot" aria-hidden="true" />
              Quickstart
            </div>
            <h2 className="lp-title" id="qs-heading">
              From install to first insight
            </h2>
          </div>
          <p className="lp-sub reveal">
            Under a minute to your first logged friction event. Windows users need GCC
            for SQLite — that&apos;s the only gotcha.
          </p>
        </header>

        <div className="qs2-grid">
          {/* Timeline steps */}
          <div className="qs2-timeline" aria-label="Installation steps">
            {STEPS.map(step => (
              <div key={step.num} className="qs2-item reveal">
                <div className="qs2-num" aria-hidden="true">{step.num}</div>
                <div>
                  <h3 className="qs2-item-title">{step.title}</h3>
                  <QuickstartCode code={step.code} />
                  <p className="qs2-note">{step.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky aside */}
          <aside className="qs2-aside reveal">
            <div className="qs2-aside-card">
              <h3 className="qs2-aside-title">Ready to dive deeper?</h3>
              <p className="qs2-aside-body">
                The full documentation covers configuration, signal thresholds, export formats,
                CI integration, and the complete command reference.
              </p>
              <div className="qs2-aside-actions">
                <a href="/docs" className="btn btn--primary">
                  Read the docs →
                </a>
                <a
                  href="https://github.com/AlchemistReturns/grit"
                  className="btn btn--ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub ↗
                </a>
              </div>
            </div>

            <div className="qs2-aside-card">
              <h3 className="qs2-aside-title">Trust guarantees</h3>
              <p className="qs2-aside-body">
                grít is local-first. Data lives in <code>.grit/store.db</code> on your machine.
                No network calls, no accounts, no telemetry.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginTop: '0.25rem' }}>
                <span className="pill">local SQLite</span>
                <span className="pill">no network</span>
                <span className="pill">always exits 0</span>
                <span className="pill">snooze-able</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
