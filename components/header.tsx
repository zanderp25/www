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
  links = links ? links : [ { href: '/', label: 'Home' }, { href: '/projects', label: 'Projects' }, {href: '/login', label: 'Log In'} ];
  
  let [navbar, setNavbar] = useState(false)
  let toggleNavbar = () => setNavbar(!navbar); console.log()

  return (
    <header className={styles.navbar}>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <link rel="icon" href={icon} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={"https://zanderp25.com" + icon} />
      </Head>
      <div className={styles.navbar_brand}>
        <Link href="/">
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
              <Link href={link.href}>
                <a>{link.label}</a>
              </Link>
            </li>
          ))}
        </ul>
        <button className={styles.menuButton} onClick={toggleNavbar}><img/></button>
      </nav>
    </header>
  );
}