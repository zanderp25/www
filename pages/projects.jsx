import DefaultLayout from "../components/defaultLayout";
import styles from '../styles/projectList.module.css';

function ProjectCard(props) {
  const { project } = props;
  return (
    <div className={styles.card}>
        <img src={project.image} alt={project.name}/>
        <div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link}>{project.buttonText}</a>
        </div>
    </div>
  );
}

export function ProjectList({ projects }) {
  return (
    <div className={styles.projectList}>
      {projects.map((project) => (
        <ProjectCard key={project.name} project={project} />
      ))}
    </div>
  );
}

let projects = [
  {
    name: "Zanderp25.com",
    description: "You're looking at it right now!",
    link: "/website",
    buttonText: "Go to info page",
    image: "/assets/icons/ZP25 Circle.png",
  },
  {
    name: "Countdowns",
    description: "Countdowns to events and holidays",
    link: "/countdown",
    buttonText: "Go to countdowns",
    image: "/assets/icons/ZP25 Countdown.png",
  },
  {
    name: "PlayCover",
    description: "An app that allows you to run iOS apps and games on an Apple Silicon Mac.",
    link: "https://playcover.io",
    buttonText: "Go to website",
    image: "https://raw.githubusercontent.com/PlayCover/PlayCover/stable/images/logo.png",
  },
  {
    name: "Discord Bots",
    description: "Join my discord server to see my bots and other server-exclusive features!",
    link: "https://discord.gg/672yY5v",
    buttonText: "Join my Discord",
    image: "/assets/icons/discord_logo.png",
  },
  {
    name: "Minecraft Server",
    description: "Join my Minecraft server to play with me and other players! (Currently offline.)",
    link: "https://discord.gg/672yY5v",
    buttonText: "Join my Discord",
    image: "/assets/icons/minecraft.png",
  },
];

export default function projectsPage(){
  return (
    <DefaultLayout title="Projects">
      <h1>Projects</h1>
      <h2>
        Here are some of my biggest projects that i have worked on over the past few years.
      </h2>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <ProjectList projects={projects} />
      </div>
    </DefaultLayout>
  )
}