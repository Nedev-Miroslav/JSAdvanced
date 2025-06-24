function solve() {
  const textAreaRef = document.getElementById("input");
  const resRef = document.getElementById("output");
  resRef.innerHTML = "";

  const sentences = textAreaRef.value
    .split(".")
    .map(s => s.trim())
    .filter(s => s.length > 0);

  if (sentences.length === 0) return; // Избягване на празен изход

  for (let i = 0; i < sentences.length; i += 3) {
    let paragraphContent = sentences.slice(i, i + 3).join("."); 
    
    // Добавяме точка само ако не завършва на такава
    if (!paragraphContent.endsWith(".")) {
      paragraphContent += ".";
    }

    resRef.innerHTML += `<p>${paragraphContent}</p>`;
  }
}
