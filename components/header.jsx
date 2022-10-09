import Link from 'next/link';
import Head from 'next/head';

import styles from './header.module.css';

export function Header({ title, description, icon, links }) {
  title = title ? `${title} - Zanderp25` : 'Zanderp25';
  description = description ? description : 'Zanderp25\'s website';
  icon = icon ? icon : '/assets/icons/ZP25 Circle.png';
  links = links ? links : [ { href: '/', label: 'Home' }, { href: '/projects', label: 'Projects' }, { href: '/discord', label: 'Discord' } ];
  return (
    <header className={styles.navbar}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={"https://zanderp25.com" + icon} />
      </Head>
      <div className={styles.navbar_brand}>
        <Link href="/">
          <>
            <img alt='Logo' width={40} height={40} />
            <span>Zanderp25</span>
          </>
        </Link>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}