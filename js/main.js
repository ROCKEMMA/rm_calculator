render_keys();

let keys = document.querySelectorAll(".key_item");
let results = document.querySelector("#results-screen");

function add_key(){
    let val = this.innerHTML;
    results = document.querySelector("#results-screen");
    results.value = results.value + val;
}

function reset_operation(){
    results = document.querySelector("#results-screen");
    results.value = "";
}

function reset_all(){
    let results2 = document.querySelector("#results-screen");
    results2.value = "0";
    document.querySelector(".record").innerHTML = "";
}

function calculate(){
    operation = document.querySelector("#results-screen");
    let r = eval(operation.value);
    set_record(operation.value,r);
    operation.value = r;
}

// Evento de todas las teclas
keys.forEach((key)=>{
    let key__ = key.innerHTML;

    if(key__ != "=" && key__ != "C" && key__ != "AC"){
        key.addEventListener("click",add_key);
    }else if (key__ == "C"){
        key.addEventListener("click",reset_operation);
    }else if(key__ == "="){
        key.addEventListener("click", calculate);
    }else if(key__ == "AC"){
        key.addEventListener("click",reset_all);
    }
});




