import styles from './projectList.module.css';
import Image from 'next/image';

function ProjectCard(props) {
  const { project } = props;
  return (
    <div className={styles.card}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.link}>{project.buttonText}</a>
        {/* <Image src={project.image} alt={project.name} layout="fill" /> */}
    </div>
  );
}

export default function ProjectList({ projects }) {
  return (
    <div className={styles.projectList}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}