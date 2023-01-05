import style from '../styles/checky.module.css';

export default function checky() {
    let checkmarks = [];
    let totalBoxes = 5000;
    for (let i = 0; i < totalBoxes; i++) {
        checkmarks.push(<input type="checkbox" className={style.checkbox} key={i} />);
    }

    function resetAll(){
        let response = confirm('Are you sure you want to clear all boxes?')
        if (response){
            for (let i=0; i < totalBoxes - 1; i++){
                let box = document.getElementById('checky').getElementsByTagName('input').item(i);
                if (box.type == "checkbox" && box.checked){
                    box.checked = false;
                }
            }
        }
    }

    return (
        <>
            <div className={style.checky} id="checky">
                {checkmarks}
            </div>
            <div className={style.buttons}>
                <button className={style.clearButton} onClick={resetAll}>🗑️</button>
            </div>
        </>
    );
}
