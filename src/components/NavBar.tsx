'use client';
import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';

const NAV_LINKS = [
  { label: 'Why grít',     href: '/#why'       },
  { label: 'How it works', href: '/#how'       },
  { label: 'Philosophy',   href: '/#friction'  },
  { label: 'Features',     href: '/#features'  },
  { label: 'Docs',         href: '/docs'       },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      id="nav"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <svg className={styles.logoIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor" opacity="0.3"/>
            <path d="M2 17L12 22L22 17V12L12 17L2 12V17Z" fill="currentColor"/>
          </svg>
          <span>gr<span className={styles.logoAccent}>í</span>t</span>
        </Link>

        <div className={styles.links} role="list">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} className={styles.link} role="listitem">
              {l.label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <a
            href="https://github.com/AlchemistReturns/grit"
            className={styles.github}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-github"
            aria-label="View grít on GitHub"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <span>GitHub</span>
          </a>
        </div>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          id="nav-menu-btn"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobile} role="menu">
          {NAV_LINKS.map(l => (
            <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={closeMenu} role="menuitem">
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/AlchemistReturns/grit"
            className={styles.mobileLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            role="menuitem"
          >
            GitHub ↗
          </a>
        </div>
      )}
    </nav>
  );
}
