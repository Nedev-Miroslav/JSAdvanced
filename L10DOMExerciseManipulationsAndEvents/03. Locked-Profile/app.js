function lockedProfile() {
   const main = document.querySelectorAll("#main div[class = profile]");

    for (const profile of main) {
       let buttons =  profile.querySelector("button");
       buttons.addEventListener("click",  showMoreInfo)
        
    }

    function showMoreInfo(event) {
        let clickedButton = event.currentTarget;
        let currenProfil = clickedButton.parentElement;
        let checkForLock = currenProfil.querySelector("input[value = lock]")
        let additinonalInfo = currenProfil.querySelector("div");
       
        if(checkForLock.checked){
            return;
        }

        if(clickedButton.textContent === "Show more"){
            additinonalInfo.style.display = "Block";
            clickedButton.textContent = "Hide it"
        } else if(clickedButton.textContent === "Hide it"){
            additinonalInfo.style.display = "none";
            clickedButton.textContent = "Show more"
        }

    }
}