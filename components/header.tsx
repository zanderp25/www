import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

import styles from '../styles/Components/header.module.css';

export function Header(
  { title, description, icon, links }: 
  { title: string, description: string, icon: string, links: Array<{href:string, label:string}> }
  ): JSX.Element
{
  title = title ? `${title} - Zanderp25` : 'Zanderp25';
  description = description ? description : 'Zanderp25\'s website';
  icon = icon ? icon : '/assets/icons/ZP25 Circle.png';
  links = links ? links : [ 
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/tools', label: 'Tools' },
    // { href: '/login', label: 'Log In' },
  ];
  
  let [navbar, setNavbar] = useState(false)
  let toggleNavbar = () => setNavbar(!navbar); console.log()

  const hostname = typeof window !== 'undefined' 
    ? window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '')
    : 'https://zanderp25.com';

  return (
    <header className={styles.navbar}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={icon} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={hostname + icon.replaceAll(' ',"%20")} />
      </Head>
      <div className={styles.navbar_brand}>
        <Link legacyBehavior href="/">
          <a>
            <div/>
            <span>Zanderp25</span>
          </a>
        </Link>
      </div>
      <nav>
        <ul className={!navbar?styles.hideNavbar:styles.showNavbar}>
          {links.map((link) => (
            <li key={link.href}>
              <Link legacyBehavior href={link.href}>
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <button className={styles.menuButton} onClick={toggleNavbar}>
          <img alt="Menu Button" src="/assets/icons/menu-w.png"/>
        </button>
      </nav>
    </header>
  );
}