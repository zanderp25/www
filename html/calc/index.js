var $ = function(id) { return document.getElementById(id); };

type = "";
signed = false;

function update(type){
    unsetEvents();

    value = 0;
    if(type == "bin"){
        value = getBinValue();
        $("dec").value = value;
        $("hex").value = value.toString(16);
    } else if(type == "dec"){
        if($("dec").value.match(/[^0-9-]/)){
            $("dec").value = $("dec").value.replace(/[^0-9-]/g, "");
        }
        $("dec").value = $("dec").value.replace(/^0+/, "");
        value = parseInt($("dec").value);
        setBinValue(value);
        $("hex").value = value.toString(16);
    } else if(type == "hex"){
        if($("hex").value.match(/[^0-9a-fA-F]/)){
            $("hex").value = $("hex").value.replace(/[^0-9A-Fa-f-]/g, "");
        }
        $("hex").value = $("hex").value.replace(/^0+/, "");
        value = parseInt($("hex").value, 16);
        setBinValue(value);
        $("dec").value = value;
    }
    
    // if(isNaN(value)){
    //     setBinValue(0);
    //     $("dec").value = 0;
    //     $("hex").value = 0;
    // }

    setEvents();
}

// TODO: add constraints for dec and hex
// TODO: signed long is broken

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