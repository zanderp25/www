function init(){
    setInterval(function(){
        update();
    }, 200);
}

function update(){
    console.log("** New Update **")
    {
        dayNumber    = document.getElementById("dayNumber");
        hourNumber   = document.getElementById("hourNumber");
        minuteNumber = document.getElementById("minuteNumber");
        secondNumber = document.getElementById("secondNumber");

        dayLabel    = document.getElementById("dayLabel")
        hourLabel   = document.getElementById("hourLabel")
        minuteLabel = document.getElementById("minuteLabel")
        secondLabel = document.getElementById("secondLabel")
    }
    now = new Date(Date.now());
    christmas = getChristmas(now);
    console.log(`Next Christmas: ${christmas.toString()}`);
    difference = christmas - now;
    console.log(`Difference = ${difference}`);
    
    day    = Math.floor( difference / (1000 * 60 * 60 * 24));
    hour   = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    second = Math.floor((difference % (1000 * 60)) / 1000);

    if (day == 1){
        dayLabel.innerHTML = "&nbsp;day, ";
    } else {
        dayLabel.innerHTML == "&nbsp;days, ";
    }
    if (hour == 1){
        hourLabel.innerHTML = "&nbsp;hour, ";
    } else {
        hourLabel.innerHTML == "&nbsp;hours, ";
    }
    if (minute == 1){
        minuteLabel.innerHTML = "&nbsp;minute, ";
    } else {
        minuteLabel.innerHTML == "&nbsp;minutes, ";
    }
    if (second == 1){
        secondLabel.innerHTML = "&nbsp;second";
    } else {
        secondLabel.innerHTML == "&nbsp;seconds";
    }

    dayNumber.innerText    = day;
    hourNumber.innerText   = hour;
    minuteNumber.innerText = minute;
    secondNumber.innerText = second;
}

function getChristmas(now){
    var year;
    if (now.getMonth() == 11){
        if (now.getDate() > 25){
            y = now.getFullYear() + 1;
        } else {
            y = now.getFullYear();
        }
    } else {
        y = now.getFullYear();
    }
    return new Date("Dec 25 " + y);
}