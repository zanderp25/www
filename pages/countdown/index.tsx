import DefaultLayout from "../../components/defaultLayout";
import styles from '../../styles/projectList.module.css';

function Card(props) {
	const { countdown } = props;
	return (
		<div className={styles.card}>
			<img src={countdown.image} alt={countdown.name}/>
			<div>
			<h3>{countdown.name}</h3>
			<p>{countdown.description}</p>
			<a href={countdown.link}>Go to countdown</a>
			</div>
		</div>
	);
}

export function List({ countdowns }) {
	return (
		<div className={styles.countdownList}>
			{countdowns.map((countdown) => (
				<Card key={countdown.name} countdown={countdown} />
			))}
		</div>
	);
}

let countdowns = [
	{
		name: "Christmas",
		description: "December 25th annually",
		link: "/countdown/christmas",
		image: "/assets/icons/christmas.png",
	},
	{
		name: "New Years",
		description: "January 1st annually",
		link: "/countdown/newYears",
		image: "/assets/icons/newyears.png",
	},
	{
		name: "Genshin Impact",
		description: "Announced banner and update dates",
		link: "/countdown/genshin",
		image: "/assets/icons/genshin.png",
	},
];


export default function countdownIndex() {
	return (
		<DefaultLayout title="Countdowns">
			<h1>Countdowns</h1>
			<h2>These countdowns are best viewed in full screen.</h2>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <List countdowns={countdowns}/>
      </div>
		</DefaultLayout>
	);
}
