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
    document.title = `${percent}% - Battery`;
    document.querySelector("link[rel*='icon']").href = `icons/${Math.ceil(percent / 20) * 20}.png`;
    if (percent <= 20) {
        document.getElementById("level").style.backgroundColor = "#ff6a6a";
    } else {
        document.getElementById("level").style.backgroundColor = "#6fff6f";
    }
    if (battery.charging) {
        document.getElementById("charging").style.display = "block";
        document.getElementById("chargeStatus").innerHTML = "Time to 100%: " + formatTime(battery.chargingTime);
    } else {
        document.getElementById("charging").style.display = "none";
        document.getElementById("chargeStatus").innerHTML = "Time to 0%: " + formatTime(battery.dischargingTime);
    }
    if (battery.chargingTime == Infinity && battery.dischargingTime == Infinity) {
        document.getElementById("chargeStatus").innerHTML = "";
    }
}

function formatTime(time) {
    if (time == Infinity) {
        return `${time.toLocaleString()}s`
    } else if (time <= 60) {
        return `${time}s`
    } else if (time <= 3600) {
        if (time % 60 != 0) {
            return `${Math.floor(time / 60)}m ${time % 60}s`
        } else {
            return `${time / 60}m`
        }
    } else {
        if (time % 60 != 0) {
            return `${Math.floor(time / 3600)}h ${Math.floor(time % 3600 / 60)}m ${time % 60}s`
        } else {
            return `${Math.floor(time / 3600)}h ${Math.floor(time % 3600 / 60)}m`
        }
    }
}

function hidestatus() {
    if (document.getElementById("chargeStatus").style.display == "none") {
        document.getElementById("chargeStatus").style.display = "block"
    } else {
        document.getElementById("chargeStatus").style.display = "none"
    }
}