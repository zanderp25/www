import style from '../styles/checky.module.css';

export default function checky() {
    let checkmarks = [];
    for (let i = 0; i < 5000; i++) {
        checkmarks.push(<input type="checkbox" className={style.checkbox} key={i} />);
    }

    return (
        <>
            <div className={style.checky}>
                {checkmarks}
            </div>
            {/* <div className={style.buttons}>
                <button className={style.clearButton} onClick={}>🗑️</button>
            </div> */}
        </>
    );
}
