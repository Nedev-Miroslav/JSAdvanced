function colorize() {
  let evenRowElements = document.querySelectorAll("table tr:nth-child(even)");

  for (const row of evenRowElements) {
    row.style.backgroundColor =  "teal";
  }
}
