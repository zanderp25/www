import styles from './footer.module.css';

export function Footer() {
    let infoLines = [
        "Zanderp25",
        <a href='mailto:zander@zanderp25.com'>zander@zanderp25.com</a>,
        "© 2022 Zanderp25",
    ]
    let socials = [
        {name: 'GitHub', href: 'https://github.com/zanderp25', icon: '/assets/icons/GitHub.png'}, 
        {name: 'Discord', href: 'https://discord.gg/672yY5v', icon: '/assets/icons/Discord.png'},
        {name: 'Twitter', href: 'https://twitter.com/zanderp25', icon: '/assets/icons/Twitter.png'}, 
        {name: 'YouTube', href: 'https://www.youtube.com/channel/UCJn-rMYM0CRURAa8TUhwuPQ', icon: '/assets/icons/YouTube.png'},
        {name: 'Twitch', href: 'https://www.twitch.tv/zanderp25', icon: '/assets/icons/Twitch.png'},
    ]
    return (
        <footer className={styles.footer}>
        <nav>
            <ul>
                {infoLines.map((line) => (
                    <li>{line}</li>
                ))}
            </ul>
            <ul>
            {socials.map((link) => (
                <li key={link.href}>
                    <a href={link.href}>
                        <img src={link.icon} />
                        {link.name}
                    </a>
                </li>
            ))}
            </ul>
        </nav>
        </footer>
    );
    }