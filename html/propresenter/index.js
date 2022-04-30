// © 2022 Zander Picon

var $ = function(id) { return document.getElementById(id); };

var hostname = "localhost";
var port = "50001";

function init(){
    $("server-url").value = hostname;
    $("server-port").value = port;

    cookies = document.cookie.split(";");
    if (document.cookie.includes("hostname=")){
        hostname = cookies[0].split("=")[1];
        console.log(`Using saved hostname ${hostname}`);
        $("server-url").value = hostname;
    }
    if (document.cookie.includes("port=")){
        port = cookies[1].split("=")[1];
        console.log(`Using saved port ${port}`);
        $("server-port").value = port;
    }

    $("next-button").onclick = nextSlide;
    $("previous-button").onclick = previousSlide;
    $("clear-type").onchange = clear;
    $("save").onclick = save;
    $("reset").onclick = reset;
    $("request-type").onchange = requestTypeChange;
    $("request-send").onclick = sendRequest;
    $("message-send").onclick = setMessage;
    $("message-clear").onclick = clearMessage;

    document.addEventListener('touchmove', function (event) {
        if (event.scale !== 1) { event.preventDefault(); }
    }, { passive: false });

    setInterval(function(){
        update();
    }, 200);
}

async function update(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", `http://${hostname}:${port}/version`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function(){
        if (xhr.status == 200){
            var response = JSON.parse(xhr.responseText);
            if (response.api_version != "v1"){
                alert("API version mismatch (Got " + response.api_version + ", expected v1)");
                reset();
            }
            $("status-text").innerHTML = `Connected to ${response.name}`;
            $("status-text").className = "status-connected";
            $("version-text").innerHTML = response.host_description;
            if (response.platform == "mac"){
                $("os-version-text").innerHTML = `macOS ${response.os_version}`;
            } else if (response.platform == "win"){
                $("os-version-text").innerHTML = `Windows ${response.os_version}`;
            } else {
                $("os-version-text").innerHTML = `OS Version ${response.os_version}`;
            }
        } else {
            $("status-text").innerHTML = "Not Connected";
            $("status-text").className = "status-disconnected";
            $("version-text").innerHTML = "";
            $("os-version-text").innerHTML = "";
            return
        }
    }
    xhr.onerror = function(){
        $("status-text").innerHTML = "Not Connected";
        $("status-text").className = "status-disconnected";
        $("version-text").innerHTML = "";
        $("os-version-text").innerHTML = "";
    }
    xhr.send();

    var slide = new XMLHttpRequest();
    slide.open("GET", `http://${hostname}:${port}/v1/status/slide`, true);
    slide.setRequestHeader("Content-Type", "application/json");
    slide.onload = async function(){
        if (slide.status == 200){
            var response = JSON.parse(slide.responseText);
            $("slide-text").innerText = `${response.current.text}`;
            $("slide-notes").innerText = `Notes: ${response.current.notes}`;
            if (response.next != null){
                $("next-text").innerText = `${response.next.text}`;
                $("next-notes").innerText = `Notes: ${response.next.notes}`;
            } else {
                $("next-text").innerText = "";
                $("next-notes").innerText = "Notes: ";
            }
        } else {
            $("slide-text").innerText = "";
            $("slide-notes").innerText = "";
            $("next-text").innerText = "";
            $("next-notes").innerText = "";
        }
    }
    slide.send();
}

async function nextSlide(){
    await fetch(`http://${hostname}:${port}/v1/trigger/next`);
}

async function previousSlide(){
    await fetch(`http://${hostname}:${port}/v1/trigger/previous`);
}

async function clear(){
    var clearType = $("clear-type").value;
    if (clearType == "all"){
        await fetch(`http://${hostname}:${port}/v1/clear/group/Clear%20All/trigger`)
    } else if (clearType == "default"){
        return
    } else {
        await fetch(`http://${hostname}:${port}/v1/clear/layer/${clearType}`)
    }
    $("clear-type").value = "default";
}

function save(){
    serverPort = parseInt($("server-port").value);
    if (!$("server-url").value.match(/^[a-zA-Z0-9-.]+$/)){
        alert("Invalid hostname");
        return;
    } else if (isNaN(serverPort) || serverPort < 1 || serverPort > 65535){
        alert("Invalid port");
        return;
    }

    hostname = $("server-url").value;
    port = $("server-port").value;

    var d = new Date();
    exdays = 365;
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = `hostname=${hostname};${expires}; path=/`;
    document.cookie = `port=${port};${expires}; path=/`;
}

function reset(){
    document.cookie = "hostname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "port=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    hostname = "localhost";
    port = "50001";

    $("server-url").value = hostname;
    $("server-port").value = port;
}

function sendRequest(){
    $("request-response").innerHTML = "Loading...";
    var xhr = new XMLHttpRequest();
    xhr.open($("request-type").value, `http://${hostname}:${port}${$("request-url").value}`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            $("request-response").innerHTML = `Response: ${xhr.status} - ${xhr.statusText}<br><br><code>${xhr.responseText}</code>`;
        }
    }
    xhr.send($("request-data").value);
}

function requestTypeChange(){
    switch($("request-type").value){
        case "GET":
            $("request-data-div").style.display = "none";
            $("request-data").disabled = true;
            break;
        case "POST":
            $("request-data-div").style.display = "flex";
            $("request-data").disabled = false;
            break;
        case "PUT":
            $("request-data-div").style.display = "flex";
            $("request-data").disabled = false;
            break;
            case "DELETE":
            $("request-data-div").style.display = "none";
            $("request-data").disabled = true;
            break;
    }
}

function setMessage(){
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", `http://${hostname}:${port}/v1/stage/message`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function(){}
    xhr.send(`"${$("message-input").value}"`);
}

function clearMessage(){
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", `http://${hostname}:${port}/v1/stage/message`, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = function(){}
    xhr.send();
    $(`message-input`).value = "";
}