function createSortedList() {
    let collection = []; // Създаваме празен масив за съхранение на числата

    return {
        add(element) {
            collection.push(element); // Добавяме елемента в масива
            collection.sort((a, b) => a - b); // Подреждаме масива в нарастващ ред
        },
        remove(index) {
            if (index >= 0 && index < collection.length) {
                collection.splice(index, 1); // Премахваме елемента на дадения индекс
            }
        },
        get(index) {
            if (index >= 0 && index < collection.length) {
                return collection[index]; // Връщаме елемента на дадения индекс
            }
        },
        get size() {
            return collection.length; // Връщаме броя на елементите в масива
        }
    };
}


let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
