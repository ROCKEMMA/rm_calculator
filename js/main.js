render_keys();

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
function delete_letter(){
    var content = results.value;
    var nuevoValor = content.slice(0, -1);
    results.value = nuevoValor;
}

function calculate(){
    operation = document.querySelector("#results-screen");
    let r = eval(operation.value);
    set_record(operation.value,r);
    operation.value = r;
}

// Evento de todas las teclas
let keys_dom = document.querySelectorAll(".key_item");

keys_dom.forEach((keys_content) => {
    let content = keys_content.innerHTML;

    if (content == "C") {
        keys_content.addEventListener("click", reset_operation);
    } else if (content == "=") {
        keys_content.addEventListener("click", calculate);
    } else if (content == "AC") {
        keys_content.addEventListener("click", reset_all);
    } else if (content == '<img src="./img/delete.png" class="delete">') {
        keys_content.addEventListener("click", delete_letter);
    } else {
        keys_content.addEventListener("click", add_key);
    }
});




