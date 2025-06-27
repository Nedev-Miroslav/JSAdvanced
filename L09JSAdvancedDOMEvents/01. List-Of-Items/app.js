function addItem() {
    let items = document.getElementById("items");
    let input = document.getElementById("newItemText");

    let newLi = document.createElement("li");
    newLi.textContent = input.value;
    items.append(newLi);


    input.value = ''; // изтриваме съдържанието от input поле
    input.focus(); // така след въвеждане на текс курсура ще е в input полето
}