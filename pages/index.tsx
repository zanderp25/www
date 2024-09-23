import DefaultLayout from '../components/defaultLayout';
import { Button } from '../components/button';
import TitleSection from '../components/titleSection';
import { useState, useEffect } from 'react';
import splashTextList from './splashTexts.json';
import Link from 'next/link';
import CountdownBanner from '../components/countdownBanner';
import { AlbumView } from '../components/music';
// import { CollageView } from '../components/photography';


const albums = [
  {
    id: 0,
    title: 'Wobbling Warbles',
    artist: 'Zander Picon',
    coverUrl: '/assets/music/albumCovers/WobblingWarbles.png',
    songs: [
      { title: 'The Basics', duration: '3:22' },
      { title: 'Wobbling Warbles', duration: '3:22' },
      { title: 'Groovy Vibes', duration: '3:22' },
      { title: 'Spooky Shadows', duration: '3:22' },
      { title: 'Sleepy Harp', duration: '3:22' },
    ],
    links: [
      { name: 'Spotify', href: 'https://open.spotify.com/album/71wnK1EvlSueTFYDrBP3Ki', icon: '/assets/icons/socials/spotify.png' },
      { name: 'Apple Music', href: 'https://music.apple.com/us/album/wobbling-warbles-ep/1767128592', icon: '/assets/icons/socials/appleMusic.svg' },
      { name: 'YouTube Music', href: 'https://music.youtube.com/playlist?list=OLAK5uy_nHrne4FQk9TdQKfV6hiOHBNw2wwveDHOA', icon: '/assets/icons/socials/youtubeMusic.svg' },
      { name: 'iTunes', href: 'https://music.apple.com/us/album/wobbling-warbles-ep/1767128592', icon: '/assets/icons/socials/itunes.svg' },
      { name: 'Amazon Music', href: 'https://music.amazon.com/albums/B0DG59T7CS', icon: '/assets/icons/socials/amazonMusic.png' },
      { name: 'YouTube', href: 'https://youtube.com/playlist?list=PLcd45ERt32kcSBveXxvQcGVLqJWJlVJWV', icon: '/assets/icons/socials/youtube.png' },
    ],
  },
];

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function HomePage() {
  let splashTexts = splashTextList.map((text) => {
    return text.text;
  });
  splashTexts.push(`There is a 1 in ${splashTexts.length+1} chance of seeing this message.`);
  let [splashText, setSplashText] = useState("Hello, world!");
  let newSplashText = () => {
    setSplashText(randomChoice(splashTexts));
  };
  useEffect(() => {
    newSplashText();
  }, []);

  return (
    <DefaultLayout>
      <CountdownBanner />
      <TitleSection>
        <h1>Zander Picon</h1>
        <p onClick={newSplashText}>{splashText}
          <Link legacyBehavior href='/website/splashTexts'>
            <a className="infoIcon">?</a>
          </Link>
        </p>
        <Button href="/projects">Projects</Button>
      </TitleSection>
      {/*   - [ ] new releases page
            - [ ] projects summary page
            - [ ] photography page
            - [ ] music page 
      */}
      <section>
        <h1>New Releases</h1>
        <AlbumView album={albums[0]} /> {/* href="/music" /> */}
        <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0', flexDirection: 'column' }}>
          <details style={{ width: '95%', maxWidth: '660px' }}>
            <summary style={{ cursor: 'pointer', fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center' }}>&nbsp;Spotify</summary>
            <iframe style={{ borderRadius: '12px', maxWidth: '660px' }} 
              src="https://open.spotify.com/embed/album/71wnK1EvlSueTFYDrBP3Ki?utm_source=generator" 
              width="95%" height="352" frameBorder="0" allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
            />
          </details>
          <details style={{ width: '95%', maxWidth: '660px' }}>
            <summary style={{ cursor: 'pointer', fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center' }}>&nbsp;Apple Music</summary>
            <iframe 
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
              frameBorder="0" height="450" style={{ width: '100%', maxWidth: '660px', overflow: 'hidden', borderRadius: '10px' }} 
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
              src="https://embed.music.apple.com/us/album/wobbling-warbles-ep/1767128592"
            />
          </details>
        </div>
      </section>
      {/* <section>
        <h1>Recent Projects</h1>
        <p>Coming soon...</p>
      </section>
      <section>
        <h1>Photography</h1>
        <p>Coming soon...</p>
        <CollageView images={images} href="/projects/photography" />
      </section> */}
      {/* <section>
        <h1>Music</h1>
        <AlbumView album={albums[0]} href="/projects/wobblingWarbles" />
      </section> */}
    </DefaultLayout>
  );
}