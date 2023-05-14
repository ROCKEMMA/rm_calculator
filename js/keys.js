let key = [
    "AC", "(", ")", "C","◄",
    7, 8, 9, "/", "√",
    4, 5, 6, "*","x²",
    1,2,3,"-","=",
    0,".","%","+"
];

function render_keys(){
    let dom_keyboard = document.querySelector(".keyboard");

    key.forEach((each_key)=>{
        let div = document.createElement("div");
        div.innerHTML = each_key;
        div.classList.add("key_item");

        //Asignación de clas de color
        key.forEach((each_key2,indice)=>{
            each_key == indice ? div.classList.add("key_tiem_color1") : null
        });
        each_key == "=" ? div.classList.add("key_tiem_color2") : null

        dom_keyboard.appendChild(div);
    });
}
