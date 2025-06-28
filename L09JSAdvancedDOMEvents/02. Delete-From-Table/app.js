function deleteByEmail() {
    const inputElement = document.querySelector("input[name=email]");

    const trElements = document.querySelectorAll("#customers tbody tr");

    const resultElement = document.getElementById('result');

    const resultRow = Array.from(trElements).find(
        (tr) =>
            tr.getElementsByTagName("td")[1].textContent === inputElement.value
    );

    if(resultRow){
      resultRow.remove();
      resultElement.textContent = "Deleted.";
    }else{
      resultElement.textContent = "Not found.";
    }

    inputElement.value = '';

}
