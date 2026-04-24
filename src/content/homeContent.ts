export const PAIN = [
  {
    id: 'pain-1',
    title: 'The Decision You Already Made Twice',
    body: `You refactored the auth layer six months ago for a reason. Now you can't remember why. The code looks "wrong" to your new self, so you change it back. Three weeks later you remember the reason the hard way.`,
  },
  {
    id: 'pain-2',
    title: `The AI Paste You Don't Quite Understand`,
    body: `You pasted 50 lines from ChatGPT. It works in tests. You ship it. Two months later it breaks in production and you have no memory of what it was supposed to do or why you trusted it.`,
  },
  {
    id: 'pain-3',
    title: 'The Revert With No Post-Mortem',
    body: `You git revert a commit that broke prod. No one writes down what went wrong. No one captures what would have caught it. The same pattern ships again in three sprints.`,
  },
  {
    id: 'pain-4',
    title: 'The 40-Minute Rabbit Hole',
    body: `You open auth.go to fix one thing. Forty minutes later you're somewhere deep in the call stack and the original problem is still open. No breadcrumb. No record. Just fatigue.`,
  },
  {
    id: 'pain-5',
    title: 'The Vague Name That Survived Code Review',
    body: `handleData, result, tmp — they slip through review because everyone's looking at logic, not names. Six months later no one knows what "data" means in this context.`,
  },
  {
    id: 'pain-6',
    title: 'The Complexity That Crept In',
    body: `One conditional became five. Nobody noticed because each addition was "just a small change." Now your cyclomatic complexity is 24 and nobody wants to touch it.`,
  },
] as const;

export const HOW_STEPS = [
  {
    id: 'step-1',
    num: '01',
    title: 'At every commit',
    body: `grít intercepts the pre-commit hook and asks adaptive, context-aware questions. Large diffs get split-commit prompts. New files get contract questions. Revert commits trigger a full 3-question post-mortem.`,
    question: `→ What's the contract of the new file(s)?`,
  },
  {
    id: 'step-2',
    num: '02',
    title: 'While you write',
    body: `grit watch monitors your files in real time. Pasting 30+ lines triggers a comprehension check. Deleting 20+ lines asks if it was a wrong turn. 40 minutes of circling the same file triggers a focus check-in.`,
    question: '→ Was any of this AI-assisted? What did you verify?',
  },
  {
    id: 'step-3',
    num: '03',
    title: 'At end of day',
    body: `grit reflect shows your daily stats and asks two reflection questions. grit stats week surfaces complexity trends, top friction tags, and your streak. Everything is queryable, exportable, and yours.`,
    question: '→ What decision today might you regret in 6 months?',
  },
] as const;

export const FEATURES = [
  {
    id: 'feat-commit',
    wide: true,
    title: 'Adaptive Commit Interviews',
    body: `Questions rotate from a configurable pool, avoiding repeats within a window. Context-aware: large diffs, new files, test-only changes, and config changes each trigger different questions.`,
    tags: ['pre-commit hook', 'question rotation', 'context-aware'],
  },
  {
    id: 'feat-watch',
    title: 'Real-time File Watcher',
    body: `200 ms debounced watcher catches paste events, large deletions, vague identifiers, complexity spikes, and dead time — all configurable.`,
    tags: ['grit watch', 'real-time'],
  },
  {
    id: 'feat-decision',
    title: 'ADR-style Decisions',
    body: `Record architectural decisions with a structured 4-question interview. Export to ADR markdown files. Never lose context on why you chose SQLite over Postgres.`,
    tags: ['grit decision', 'ADR export'],
  },
  {
    id: 'feat-stats',
    title: 'Analytics & Heatmaps',
    body: `Weekly summaries, per-file complexity sparklines, 12-week GitHub-style heatmaps, and tag-grouped digests. Spot patterns before they become problems.`,
    tags: ['grit stats', 'heatmap'],
  },
  {
    id: 'feat-revert',
    title: 'Revert Post-Mortems',
    body: `Every git revert automatically triggers a 3-question post-mortem. What went wrong? Was it caught in review? What would have caught it earlier?`,
    tags: ['post-rewrite hook', 'automatic'],
  },
  {
    id: 'feat-export',
    title: 'Portable Data Exports',
    body: `Export everything to Markdown or JSON with date-range filters. Your friction data is stored locally in SQLite — no cloud, no lock-in, fully queryable.`,
    tags: ['grit push', 'local SQLite'],
  },
  {
    id: 'feat-snooze',
    title: 'Snooze When You Need to Ship',
    body: `grit snooze 30m pauses interviews without uninstalling hooks. Resume automatically or manually. Your CI never breaks — grít always exits 0.`,
    tags: ['grit snooze', 'CI safe'],
  },
  {
    id: 'feat-reflect',
    wide: true,
    title: 'End-of-Day Reflection',
    body: `Close the loop. See today's friction count, completed vs. skipped interviews, your consecutive-days streak, and answer two rotating reflection questions. Optionally export to dated markdown files.`,
    tags: ['grit reflect', 'daily habit', 'markdown export'],
  },
] as const;

export const SIGNALS = [
  { badge: 'AI Assist', color: 'blue', trigger: '≥ 15 new lines added', question: '"Was any of this AI-assisted? What did you verify?"' },
  { badge: 'Paste Check', color: 'purple', trigger: '≥ 30 new lines added', question: '"Did you paste this? Do you fully understand what it does?"' },
  { badge: 'Undo Spike', color: 'red', trigger: '≥ 20 lines deleted', question: '"Wrong turn or intentional cleanup?"' },
  { badge: 'Dead Time', color: 'amber', trigger: '≥ 40 min in same file', question: `"You've been in this file a while. Is the problem still clear?"` },
  { badge: 'Naming', color: 'green', trigger: 'Vague identifier detected', question: '"What would a better name be?"' },
  { badge: 'Complexity', color: 'teal', trigger: 'Score > 10.0', question: 'Per-function breakdown (informational)' },
  { badge: 'Revert', color: 'orange', trigger: 'git revert detected', question: '3-question post-mortem' },
] as const;

