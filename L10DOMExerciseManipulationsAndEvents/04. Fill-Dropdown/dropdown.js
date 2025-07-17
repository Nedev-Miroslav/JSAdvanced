function addItem() {
    let textElement = document.getElementById("newItemText");
    let valueElement = document.getElementById("newItemValue");
    let menuElement = document.getElementById("menu");

    if(textElement.value === ""){
        return
    }

    let newOption = document.createElement("option");
    newOption.textContent = textElement.value;
    newOption.value = valueElement.value;

    menuElement.appendChild(newOption);

    textElement.value = "";
    valueElement.value = "";

}