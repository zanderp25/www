/*
    Christmas Countdown
    ©2021 Zanderp25
*/

christmas = new Date(0); // Will be set later

function init(){
    setInterval(function(){
        update();
    }, 200);
}

lang = navigator.language.substring(0,2);
if (window.location.search.startsWith("?lang=")){
    lang = window.location.search.substring(6,8);
}

function update(){
    console.log("** New Update **")
    {
        dayNumber    = document.getElementById("dayNumber");
        hourNumber   = document.getElementById("hourNumber");
        minuteNumber = document.getElementById("minuteNumber");
        secondNumber = document.getElementById("secondNumber");

        dayLabel     = document.getElementById("dayLabel");
        hourLabel    = document.getElementById("hourLabel");
        minuteLabel  = document.getElementById("minuteLabel");
        secondLabel  = document.getElementById("secondLabel");
    }
    now = new Date();
    if (christmas.getTime() < now.getTime()){
        if (christmas.getTime() != 0) {
            console.log("WOOOOOOOOOOO!!!!!!!!  MERRY CHRISTMAS!!!!!");
        }
        christmas = getChristmas(now);
    }

    console.log(`Next Christmas: ${christmas.toString()}`);
    difference = christmas - now;
    console.log(`Difference = ${difference}`);
    
    day    = Math.floor( difference / (1000 * 60 * 60 * 24));
    hour   = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minute = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    second = Math.floor((difference % (1000 * 60)) / 1000);
    
    if (day == 1){
        if (lang == "es"){
            dayLabel.innerHTML = "&nbsp;día, ";
        } else if (lang == "ja"){
            dayLabel.innerHTML = "&nbsp;日 ";
        } else {
            dayLabel.innerHTML = "&nbsp;day, ";
        }
    } else {
        if (lang == "es"){
            dayLabel.innerHTML = "&nbsp;días, ";
        } else if (lang == "ja"){
            dayLabel.innerHTML = "&nbsp;日 ";
        } else {
            dayLabel.innerHTML = "&nbsp;days, ";
        }
    }
    if (hour == 1){
        if (lang == "es"){
            hourLabel.innerHTML = "&nbsp;hora, ";
        } else if (lang == "ja"){
            hourLabel.innerHTML = "&nbsp;時間 ";
        } else {
            hourLabel.innerHTML = "&nbsp;hour, ";
        }
    } else {
        if (lang == "es"){
            hourLabel.innerHTML = "&nbsp;horas, ";
        } else if (lang == "ja"){
            hourLabel.innerHTML = "&nbsp;時間 ";
        } else {
            hourLabel.innerHTML = "&nbsp;hours, ";
        }
    }
    if (minute == 1){
        if (lang == "es"){
            minuteLabel.innerHTML = "&nbsp;minuto, ";
        } else if (lang == "ja"){
            minuteLabel.innerHTML = "&nbsp;分 ";
        } else {
            minuteLabel.innerHTML = "&nbsp;minute, ";
        }
    } else {
        if (lang == "es"){
            minuteLabel.innerHTML = "&nbsp;minutos, ";
        } else if (lang == "ja"){
            minuteLabel.innerHTML = "&nbsp;分 ";
        } else {
            minuteLabel.innerHTML = "&nbsp;minutes, ";
        }
    }
    if (second == 1){
        if (lang == "es"){
            secondLabel.innerHTML = "&nbsp;segundo";
        } else if (lang == "ja"){
            secondLabel.innerHTML = "&nbsp;秒";
        } else {
            secondLabel.innerHTML = "&nbsp;second";
        }
    } else {
        if (lang == "es"){
            secondLabel.innerHTML = "&nbsp;segundos";
        } else if (lang == "ja"){
            secondLabel.innerHTML = "&nbsp;秒";
        } else {
            secondLabel.innerHTML = "&nbsp;seconds";
        }
    }
    
    dayNumber.innerText    = day;
    hourNumber.innerText   = hour;
    minuteNumber.innerText = minute;
    secondNumber.innerText = second;
    
    if (day == 0){
        dayLabel.style.display  = "none";
        dayNumber.style.display = "none";
        if (hour == 0){
            hourLabel.style.display  = "none";
            hourNumber.style.display = "none";
            if (minute == 0){
                minuteLabel.style.display    = "none";
                minuteNumber.style.display   = "none";
                secondLabel.style.display    = "none";
                secondNumber.className = "big";
            } else {
                minuteLabel.style.display  = "inline-block";
                minuteNumber.style.display = "inline-block";
            }
        } else {
            hourLabel.style.display  = "inline-block";
            hourNumber.style.display = "inline-block";
        }
    } else {
        dayLabel.style.display     = "inline-block";
        dayNumber.style.display    = "inline-block";
        hourLabel.style.display    = "inline-block";
        hourNumber.style.display   = "inline-block";
        minuteLabel.style.display  = "inline-block";
        minuteNumber.style.display = "inline-block";
        secondLabel.style.display  = "inline-block";
        secondNumber.className     = "number";
    }
}

function getChristmas(now){
    var year;
    if (now.getMonth() == 11){
        if (now.getDate() >= 25){
            y = now.getFullYear() + 1;
        } else {
            y = now.getFullYear();
        }
    } else {
        y = now.getFullYear();
    }
    return new Date("Dec 25 " + y);
}