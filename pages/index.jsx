import DefaultLayout from '../components/defaultLayout';
import { Button } from '../components/button';
import TitleSection from '../components/titleSection';
import { useState } from 'react';
import splashTextList from './splashTexts.json';
import AlertBanner from '../components/alertBanner';

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function HomePage() {
  let splashTexts = splashTextList.map((text) => {
    return text.text;
  });
  splashTexts.push(`There is a 1 in ${splashTexts.length+1} chance of seeing this message.`);
  let [splashText, setSplashText] = useState(randomChoice(splashTexts));
  let newSplashText = () => {
    setSplashText(randomChoice(splashTexts));
  };
  
  return (
    <DefaultLayout>
      <AlertBanner title="Attention!" message="This is a test of the emergency alert system. No action is required." type="danger" />
      <TitleSection>
        <h1>Zanderp25</h1>
        <p onClick={newSplashText}>{splashText}
          <a href='/website/splashTexts' className="infoIcon">?</a>
        </p>
        <Button href="/projects">Projects</Button>
      </TitleSection>
    </DefaultLayout>
  );
}