import Image from 'next/image';
import styles from '../styles/Components/music.module.css';

interface Album {
    id: number;
    title: string;
    artist: string;
    coverUrl: string;
    songs: Song[];
    links?: Link[];
}

interface Song {
    title: string;
    duration: string;
}

interface Link {
    name: string;
    href: string;
    icon?: string;
}

interface AlbumViewProps {
    album: Album;
}

interface Album {
    id: number;
    title: string;
    artist: string;
    coverUrl: string;
    songs: Song[];
}

interface Song {
    title: string;
    duration: string;
}

interface AlbumViewProps {
    album: Album;
}

export function AlbumCover({ album }: { album: Album }) {
    return (
        <div className={styles.albumCover}>
            <Image src={album.coverUrl} alt={album.title} width={200} height={200} />
        </div>
    );
}

export function AlbumList({ album }: { album: Album }) {
    return (
        <ul className={styles.albumList}>
            {album.songs.map((song, index) => (
                <li key={index} className={styles.song}>
                    <span className={styles.songTitle}>
                        {song.title}
                    </span>
                    <span className={styles.songDuration}>
                        {song.duration}
                    </span>
                </li>
            ))}
        </ul>
    );
}

export function AlbumView({ album }: AlbumViewProps) {
    return (
        <div>
            <div className={styles.albumView}>
                <div className={styles.albumInfo}>
                    <AlbumCover album={album} />
                    <h2>{album.title}</h2>
                    <p>{album.artist}</p>
                </div>
                <div className={styles.songList}>
                    <AlbumList album={album} />
                </div>
            </div>
            <div className={styles.albumLinks}>
                <span>Listen on:</span>
                {album.links && album.links.map((link, index) => (
                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon && <Image src={link.icon} alt={link.name} width={30} height={30} />}
                    </a>
                ))}
            </div>
        </div>
    );
}

export type { Album, Song, AlbumViewProps };

// Example usage

// import { AlbumList, AlbumView } from '../components/music';

// const albums = [
//     {
//         id: 0,
//         title: 'Wobbling Warbles',
//         artist: 'Zander Picon',
//         coverUrl: '/assets/music/albumCovers/WobblingWarbles.png',
//         songs: [
//             { title: 'The Basics', duration: '3:22' },
//             { title: 'Wobbling Warbles', duration: '3:22' },
//             { title: 'Groovy Vibes', duration: '3:22' },
//             { title: 'Spooky Shadows', duration: '3:22' },
//             { title: 'Sleepy Harp', duration: '3:22' },
//         ],
//     },
//     // Add more albums as needed
// ];

// const IndexPage: React.FC = () => {
//     return (
//         <div>
//             <h1>List of songs in {albums[0].title}</h1>
//             <AlbumList album={albums[0]} />

//             <h1>Album View</h1>
//             <AlbumView album={albums[0]} />
//         </div>
//     );
// };

// export default IndexPage;