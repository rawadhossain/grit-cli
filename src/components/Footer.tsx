import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.logo}>grít</span>
            <p className={styles.tagline}>
              A developer friction logger.<br />
              Built in Go. Stored locally. Yours forever.
            </p>
            <div className={styles.trust}>
              <span className={styles.trustBadge}>✓ hooks always exit 0</span>
              <span className={styles.trustBadge}>✓ local-first SQLite</span>
              <span className={styles.trustBadge}>✓ no network by default</span>
            </div>
          </div>

          <div className={styles.cols}>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Product</h4>
              <Link href="/#why"        className={styles.link}>Why grít</Link>
              <Link href="/#features"   className={styles.link}>Features</Link>
              <Link href="/#quickstart" className={styles.link}>Quick Start</Link>
              <Link href="/docs"        className={styles.link}>Documentation</Link>
            </div>
            <div className={styles.col}>
              <h4 className={styles.colTitle}>Project</h4>
              <a href="https://github.com/AlchemistReturns/grit"          className={styles.link} target="_blank" rel="noopener noreferrer" id="footer-github">GitHub ↗</a>
              <a href="https://github.com/AlchemistReturns/grit/releases" className={styles.link} target="_blank" rel="noopener noreferrer" id="footer-releases">Releases ↗</a>
              <a href="https://github.com/AlchemistReturns/grit/issues"   className={styles.link} target="_blank" rel="noopener noreferrer" id="footer-issues">Issues ↗</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>grít is open source and MIT licensed. Data stays on your machine.</p>
        </div>
      </div>
    </footer>
  );
}
