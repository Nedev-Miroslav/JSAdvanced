function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let input = document.getElementById("searchField");
   let tableRows = document.querySelectorAll("tbody tr");
   
   function onClick() {

      for(const row of tableRows){
         row.classList.remove("select");
      }


      for(const row of tableRows){
         console.log(row.innerHTML)
         if(input.value !== "" && row.innerHTML.includes(input.value)){
            row.className = "select";
         }
      }
      
      input.field = "";

   }
}