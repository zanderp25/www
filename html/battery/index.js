function init(){
    setInterval(function(){
        update();
    }, 1000);
}

async function update() {
    battery = await navigator.getBattery()
    percent = parseInt(battery.level * 100);
    document.getElementById("percentage").innerHTML = percent;
    document.getElementById("level").style.height = percent + "%";
    if (percent <= 20) {
        document.getElementById("level").style.backgroundColor = "#ff6a6a";
    } else {
        document.getElementById("level").style.backgroundColor = "#6fff6f";
    }
    if (battery.charging) {
        document.getElementById("charging").style.display = "block";
    } else {
        document.getElementById("charging").style.display = "none";
    }
}