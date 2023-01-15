import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import Link from 'next/link';
import styles from './Nav.module.css';

const PAGES = [
  {
    name: 'Hiragana & Katakana',
    href: '/',
  },
  {
    name: 'Adjectives',
    href: '/adjectives',
  },
  {
    name: 'Verbs - Basics',
    href: '/verbs',
  },
  {
    name: 'Verbs - More',
    href: '/verbs-more',
  },
  {
    name: 'Kanji - Numbers',
    href: '/numbers',
  },
  {
    name: 'Kanji - Weekdays',
    href: '/kanji-weekdays',
  },
];

const Nav = () => {
  const [show, setShow] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setShow(false)}>
      <nav>
        <button className={styles.toggle} onClick={() => setShow(true)}>
          <img src="/assets/round-menu-24px.svg" alt="" /> Quizes
        </button>
        <div className={`${styles.panel} ${show && styles.panelShow}`}>
          <h2>Japanese Quizes</h2>
          <hr />
          <ul className={styles.links}>
            {PAGES.map((page) => (
              <li key={page.href}>
                <Link
                  className={styles.navLink}
                  href={page.href}
                  onClick={() => setShow(false)}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
          <a
            className={styles.feedbackLink}
            href="mailto:info@japanese-quiz.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Send feedback
          </a>
        </div>
      </nav>
    </OutsideClickHandler>
  );
};

export default Nav;
