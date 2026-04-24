import styles from './TerminalDemo.module.css';

type LineType = 'prompt' | 'out' | 'success' | 'question' | 'answer' | 'blank';

interface TerminalLine {
  type: LineType;
  text?: string;
  cmd?: string;   // for prompt lines: the command text
}

export const TERMINAL_LINES: TerminalLine[] = [
  { type: 'prompt', cmd: 'grit init' },
  { type: 'success', text: '✓ Installed pre-commit hook' },
  { type: 'success', text: '✓ Created .grit/store.db' },
  { type: 'success', text: '✓ Wrote .grit.yaml config' },
  { type: 'blank' },
  { type: 'prompt', cmd: 'git commit -m "feat: add auth middleware"' },
  { type: 'blank' },
  { type: 'question', text: '→ What\'s the hardest part of this change?' },
  { type: 'answer',   text: '  [design] not sure if this belongs in the handler or middleware' },
  { type: 'blank' },
  { type: 'question', text: '→ What assumption are you most uncertain about?' },
  { type: 'answer',   text: '  token expiry — I haven\'t tested refresh edge cases yet' },
  { type: 'blank' },
  { type: 'success', text: '✓ Friction logged. Commit proceeding...' },
];

export default function TerminalDemo({ lines = TERMINAL_LINES }: { lines?: TerminalLine[] }) {
  return (
    <div className={styles.wrap}>
      <div className="terminal">
        <div className="terminal-bar">
          <span className="t-dot t-dot--red"   aria-hidden="true" />
          <span className="t-dot t-dot--yellow" aria-hidden="true" />
          <span className="t-dot t-dot--green"  aria-hidden="true" />
          <span className="terminal-title">~/your-project</span>
        </div>
        <div className="terminal-body" aria-label="Terminal demo">
          {lines.map((line, i) => {
            if (line.type === 'blank') return <div key={i} className="t-blank" />;
            if (line.type === 'prompt') return (
              <div key={i} className="t-line">
                <span className="t-prompt">$ </span>
                <span className="t-cmd">{line.cmd}</span>
              </div>
            );
            const cls =
              line.type === 'success'  ? 't-out--success' :
              line.type === 'question' ? 't-question' :
              line.type === 'answer'   ? 't-answer' : 't-out';
            return <div key={i} className={`t-line ${cls}`}>{line.text}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
