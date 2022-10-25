import { Theater } from '../components/theater';
import DefaultLayout from '../components/defaultLayout';
import { CardSection } from '../components/section';
import { Button } from '../components/button';

function Title({ title }) {
  return <h1>{title ? title : 'Lorem Ipsum'}</h1>;
}

export default function HomePage() {
  return (
    <DefaultLayout>
      <Theater media="/assets/New Logo.mp4" height={512} behind_header noLoop />
      <CardSection overlap>
        <h1>Zanderp25</h1>
        <p>
          Welcome to my all-new website! This website is made almost entirely by me in Next.js.
        </p>
        <Button href="/projects">Projects</Button>
      </CardSection>
    </DefaultLayout>
  );
}