import DefaultLayout from '../components/defaultLayout';
import { Button } from '../components/button';
import TitleSection from '../components/titleSection';
import { useState } from 'react';
import splashTextList from './splashTexts.json';

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

let infoButton = {
  display: "inline-block",
  opacity: "60%",
  background: "#fff",
  borderRadius: "50%",
  fontSize: "8pt",
  margin: "5px",
  height: "15px",
  width: "15px",
  textAlign: "center",
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