import styles from '../styles/Components/footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
    let infoLines = [
        "Zander Picon",
        <Link key="email" href='mailto:zander@zanderp25.com'>zander@zanderp25.com</Link>,
        "© 2024 Zanderp25",
    ]
    let socials = [
        {name: 'GitHub', href: 'https://github.com/zanderp25', icon: '/assets/icons/socials/github.png'}, 
        {name: 'LinkedIn', href: 'https://linkedin.com/in/zanderpicon', icon: '/assets/icons/socials/linkedin.png'},
        {name: 'Instagram', href: 'https://instagram.com/zanderp25', icon: '/assets/icons/socials/instagram.png'},
        {name: 'Discord', href: 'https://discord.gg/672yY5v', icon: '/assets/icons/socials/discord.png'},
        // {name: 'Threads', href: 'https://threads.net/@zanderp25', icon: '/assets/icons/socials/threads.png'},
        {name: 'YouTube', href: 'https://youtube.com/@zanderpicon', icon: '/assets/icons/socials/youtube.png'},
        // {name: 'YouTube', href: 'https://youtube.com/@zanderp25', icon: '/assets/icons/socials/youtube.png'},
        // {name: 'Twitch', href: 'https://twitch.tv/zanderp25', icon: '/assets/icons/socials/twitch.png'},
        {name: 'Spotify', href: 'https://open.spotify.com/artist/5AspbPwL5IXqE8p7orQbF0?si=PcqnmjDjRRu8NUc_b-3UIA', icon: '/assets/icons/socials/spotify.png'},
    ]
    return (
        <footer className={styles.footer}>
            <ul className={styles.info}>
                {infoLines.map((line) => (
                    <li key={infoLines.indexOf(line)}>{line}</li>
                ))}
            </ul>
            <ul className={styles.socials}>
            {socials.map((link) => (
                <li key={link.name}>
                    <Link legacyBehavior href={link.href}>
                        <a>
                            <Image 
                                src={link.icon} height={30} width={30} style={{objectFit: "contain"}}
                                alt="" aria-hidden={true}
                            />
                            <span>
                                {link.name}
                            </span>
                        </a>
                    </Link>
                </li>
            ))}
            </ul>
        </footer>
    );
}