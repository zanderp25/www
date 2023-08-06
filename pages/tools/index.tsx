import DefaultLayout from "../../components/defaultLayout";
import styles from '../../styles/projectList.module.css';
import Image from "next/image";
import Link from "next/link";

function ToolCard(props) {
  const { tool } = props;
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image src={tool.image || "/assets/icons/ZP25 Circle.png"} layout="fill" objectFit="contain" />
      </div>
      <div>
        <h3>{tool.name}</h3>
        <p>{tool.description}</p>
        <Link href={tool.link} >
          <a>Open</a>
          {/* <a>{tool.buttonText}</a> */}
        </Link>
      </div>
    </div>
  );
}

export function ToolList({ tools }) {
  return (
    <div className={styles.toolList}>
      {tools.map((tool) => (
        <ToolCard key={tool.name} tool={tool} />
      ))}
    </div>
  );
}

let tools = [
  {
    name: "Hex Color Picker",
    description: "Takes any hex color and displays it.",
    link: "/color",
    image: "",
  }
]

export default function toolsPage(){
  return (
    <DefaultLayout title="Tools">
      <h1>Tools</h1>
      <h2>
        Here are some random web-based tools I have made.
      </h2>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <ToolList tools={tools} />
      </div>
    </DefaultLayout>
  )
}