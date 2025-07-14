function create(words) {
    let allContent = document.getElementById("content");

    for (const word of words) {
        let p = document.createElement("p");
        p.textContent = word;
        p.style.display = "none";

        let div = document.createElement("div");

        div.appendChild(p);

        allContent.appendChild(div);
    }

    let currentElements = allContent.querySelectorAll("div");

    for (const currentDiv of currentElements) {
        currentDiv.addEventListener("click", (event) => {
            event.currentTarget.children[0].style.display = "";
        })
    }


}
