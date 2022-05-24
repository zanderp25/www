var $ = function(id) { return document.getElementById(id); };

type = "";
signed = false;

function update(base){
    unsetEvents();

    value = 0;
    if(base == "bin"){
        value = getBinValue();
    } else if(base == "dec"){
        if($("dec").value.match(/[^0-9-]/)){
            $("dec").value = $("dec").value.replace(/[^0-9-]/g, "");
        }
        if ($("dec").value.match(/^0+[1-9]/, "")){
            $("dec").value = $("dec").value.replace(/^0+/, "");
        }
        value = parseInt($("dec").value);
    } else if(base == "hex"){
        if($("hex").value.match(/[^0-9a-fA-F]/)){
            $("hex").value = $("hex").value.replace(/[^0-9A-Fa-f-]/g, "");
        }
        $("hex").value = $("hex").value.replace(/^0+/, "");
        value = parseInt($("hex").value, 16);
    }
    
    // constrain the values to the int type
    if(type == "sbyte"){
        value = Math.min(value, 127);
        value = Math.max(value, -128);
    } else if(type == "byte"){
        value = Math.min(value, 255);
        value = Math.max(value, 0);
    } else if(type == "short"){
        value = Math.min(value, 32767);
        value = Math.max(value, -32768);
    } else if(type == "ushort"){
        value = Math.min(value, 65535);
        value = Math.max(value, 0);
    } else if(type == "int"){
        value = Math.min(value, 2147483647);
        value = Math.max(value, -2147483648);
    } else if(type == "uint"){
        value = Math.min(value, 4294967295);
        value = Math.max(value, 0);
    } else if(type == "long"){
        value = Math.min(value, 9223372036854775807);
        value = Math.max(value, -9223372036854775808);
    } else if(type == "ulong"){
        value = Math.min(value, 18446744073709551615);
        value = Math.max(value, 0);
    } 

    setBinValue(value);
    $("dec").value = value;
    $("hex").value = value.toString(16);

    if($("dec").value == "NaN"){
        setBinValue(0);
        $("dec").value = 0;
        $("hex").value = 0;
    }

    setEvents();
}

// TODO: long is broken

function getBinValue(){
    value = 0;
    invert = false;
    if(signed) invert = document.getElementsByName(-1)[0].checked
    binParent = $("bin-input");
    for(div of binParent.children){
        for(elem of div.children){
            if(elem.checked){
                if(elem.name == '-1') break;
                value += parseInt(elem.name);
            }
        }
    }
    if(invert) value = value ^ -(2**(8*binParent.children.length-1));
    return value;
}

function setBinValue(value){
    binParent = $("bin-input");
    for(div of binParent.children){
        for(elem of div.children){
            if(elem.name == '-1'){
                elem.checked = (value < 0);
            } else {
                elem.checked = (value & elem.name) != 0;
            }
        }
    }
}

function setType(){
    binParent = $("bin-input");
    binParent.innerHTML = "";
    type = $("int-type").value;
    count = 0;
    if(type == "sbyte" || type == "byte"){
        signed = type == "sbyte";
        count = 8;
    } else if(type == "short" || type == "ushort"){
        signed = type == "short";
        count = 16;
    } else if(type == "int" || type == "uint"){
        signed = type == "int";
        count = 32;
    } else if(type == "long" || type == "ulong"){
        signed = type == "long";
        count = 64;
    }
    // make a div for each byte
    for(i = 0; i < count; i+=8){
        div = document.createElement("div");
        div.className = "bin-group";
        for(ii = 0; ii < 8; ii++){
            a = document.createElement('input');
            a.type = "checkbox";
            a.name = 2**(i+ii);
            a.title = 2**(i+ii);
            if(signed && (i+ii) == count-1){
                a.name='-1';
                a.title='Negative';
            }
            div.appendChild(a);
        }
        binParent.appendChild(div);
    }

    updateInfo();
    update("dec");
}

function setEvents(){
    for(elem in $("bin-input").children){
        $("bin-input").children[elem].oninput = function(){
            update('bin');
        };
    }
    $('dec').oninput = function(){
        update('dec');
    };
    $('hex').oninput = function(){
        update('hex');
    };
}

function unsetEvents(){
    for(elem in $("bin-input").children){
        $("bin-input").children[elem].oninput = null;
    }
    $('dec').oninput = null;
    $('hex').oninput = null;
}

function updateInfo(){
    switch(type){
        case "sbyte":
            $("type-name").innerHTML = "Signed Byte";
            $("type-range").innerHTML = "-2<sup>7</sup> to 2<sup>7</sup> - 1";
            $("type-description").innerHTML = "8-bit signed integer";
            break;
        case "byte":
            $("type-name").innerHTML = "Unsigned Byte";
            $("type-range").innerHTML = "0 to 2<sup>8</sup> - 1";
            $("type-description").innerHTML = "8-bit unsigned integer";
            break;
        case "short":
            $("type-name").innerHTML = "Signed Short";
            $("type-range").innerHTML = "-2<sup>15</sup> to 2<sup>15</sup> - 1";
            $("type-description").innerHTML = "16-bit signed integer";
            break;
        case "ushort":
            $("type-name").innerHTML = "Unsigned Short";
            $("type-range").innerHTML = "0 to 2<sup>16</sup> - 1";
            $("type-description").innerHTML = "16-bit unsigned integer";
            break;
        case "int":
            $("type-name").innerHTML = "Signed Int";
            $("type-range").innerHTML = "-2<sup>31</sup> to 2<sup>31</sup> - 1";
            $("type-description").innerHTML = "32-bit signed integer";
            break;
        case "uint":
            $("type-name").innerHTML = "Unsigned Int";
            $("type-range").innerHTML = "0 to 2<sup>32</sup> - 1";
            $("type-description").innerHTML = "32-bit unsigned integer";
            break;
        case "long":
            $("type-name").innerHTML = "Signed Long";
            $("type-range").innerHTML = "-2<sup>63</sup> to 2<sup>63</sup> - 1";
            $("type-description").innerHTML = "64-bit signed integer";
            break;
        case "ulong":
            $("type-name").innerHTML = "Unsigned Long";
            $("type-range").innerHTML = "0 to 2<sup>64</sup> - 1";
            $("type-description").innerHTML = "64-bit unsigned integer";
            break;
        default:
            $("type-name").innerHTML = "";
            $("type-range").innerHTML = "";
            $("type-description").innerHTML = "";
    }
}