function toggle() {
    const buttenElement = document.getElementsByClassName("button")[0];
    const hiddenText = document.getElementById("extra");

    if(buttenElement.textContent === "More"){
        buttenElement.textContent = "Less";
        hiddenText.style.display = "block";
    }else if(buttenElement.textContent === "Less"){
        buttenElement.textContent = "More";
        hiddenText.style.display = "none";
    }

}