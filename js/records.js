function set_record(operation, result){
    let item_record = operation + "=\t" + result;
    let records_box_DOM = document.querySelector(".record");
    records_box_DOM.innerHTML += "<li>" + item_record + "</li>";
    records_box_DOM.scrollTop = records_box_DOM.scrollHeight;
}