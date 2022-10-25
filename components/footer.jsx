import styles from './footer.module.css';

export function Footer() {
    let infoLines = [
        "Zanderp25",
        <a href='mailto:zander@zanderp25.com'>zander@zanderp25.com</a>,
        "© 2022 Zanderp25",
    ]
    let socials = [
        {name: 'GitHub', href: 'https://github.com/zanderp25', icon: '/assets/icons/github.png'}, 
        {name: 'Discord', href: 'https://discord.gg/672yY5v', icon: '/assets/icons/discord.png'},
        {name: 'Twitter', href: 'https://twitter.com/zanderp25', icon: '/assets/icons/twitter.png'}, 
        {name: 'YouTube', href: 'https://youtube.com/channel/UCJn-rMYM0CRURAa8TUhwuPQ', icon: '/assets/icons/youTube.png'},
        {name: 'Twitch', href: 'https://twitch.tv/zanderp25', icon: '/assets/icons/twitch.png'},
    ]
    return (
        <footer className={styles.footer}>
            <ul className={styles.info}>
                {infoLines.map((line) => (
                    <li key={line}>{line}</li>
                ))}
            </ul>
            <ul className={styles.socials}>
            {socials.map((link) => (
                <li key={link.name}>
                    <a href={link.href}>
                        <img src={link.icon} />
                        {link.name}
                    </a>
                </li>
            ))}
            </ul>
        </footer>
    );
}