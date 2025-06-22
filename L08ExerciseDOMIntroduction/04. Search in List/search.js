function search() {
   
   let listItem = Array.from(document.querySelectorAll("li"));
   let searchingText = document.getElementById("searchText").value;
   let result = document.getElementById("result");

   let matches = 0;

   for( const li of listItem){
      li.style.fontWeight = "";
      li.style.textDecoration = "";
   
      if (li.textContent.includes(searchingText)) {
         matches++;
         li.style.fontWeight = "bold"
         li.style.textDecoration = "underline"
      }

   
   }

   result.textContent = `${matches} matches found`;

}