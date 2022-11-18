import DefaultLayout from "../../components/defaultLayout";

let countdowns = [
    {name: "Christmas", path: "christmas"},
    {name: "New Years", path: "newYears"},
    {name: "Genshin Impact", path: "genshin"},
];



export default function countdownIndex() {
    return (
        <DefaultLayout title="Countdowns">
            <h1>Countdowns</h1>
            <h2>These countdowns are best viewed in full screen.</h2>
            <ul className="linkList">
                {countdowns.map((countdown) => {
                    return <li key={countdown.name}><a href={"/countdown/" + countdown.path}>{countdown.name}</a></li>
                })}
            </ul>
        </DefaultLayout>
    );
}
