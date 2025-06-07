function fromJSONToHTMLTable(input) {
    let arr = JSON.parse(input);
    if (arr.length === 0) return "<table>\n</table>";
    
    let keys = Array.from(new Set(arr.flatMap(obj => Object.keys(obj).map(k => k.trim()))));
    
    function escapeHTML(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return text.toString().replace(/[&<>"']/g, m => map[m]);
    }
    
    let result = "<table>\n";
    
    result += "   <tr>" + keys.map(k => `<th>${escapeHTML(k)}</th>`).join("") + "</tr>\n";
    
    for (let obj of arr) {
        result += "   <tr>" + keys.map(k => `<td>${obj.hasOwnProperty(k) ? escapeHTML(obj[k].toString()) : ""}</td>`).join("") + "</tr>\n";
    }
    
    result += "</table>";
    return result;
}


console.log(fromJSONToHTMLTable('[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]'));
console.log(fromJSONToHTMLTable('[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]'));
