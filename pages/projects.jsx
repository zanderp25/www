import DefaultLayout from "../components/defaultLayout";
import ProjectList from "../components/projectList";
import { CardSection } from "../components/section";

let projects = [
  {
    id: 1,
    name: "Zanderp25.com",
    description: "You're looking at it right now!",
    link: "/",
    buttonText: "Go to homepage",
    image: "/assets/icons/ZP25 Squircle.png",
  },
  {
    id: 2,
    name: "PlayCover",
    description: "An app that allows you to run iOS apps and games on an Apple Silicon Mac.",
    link: "https://playcover.io",
    buttonText: "Go to website",
    image: "/assets/icons/PlayCover.png",
  },
  {
    id: 3,
    name: "Discord Bots",
    description: "Join my discord server to see my bots and other server-exclusive features!",
    link: "https://discord.gg/672yY5v",
    buttonText: "Join my Discord",
    image: "/assets/icons/discord.png",
  },
];

export default function projectsPage(){
  return (
    <DefaultLayout title="Projects">
      <CardSection>
        <h1>Projects</h1>
        <p>
          Here are some of my biggest projects that i have worked on over the past few years.
        </p>
      </CardSection>
      <ProjectList projects={projects} />
    </DefaultLayout>
  )
}