function addItem() {
    
    const itemListElement = document.getElementById('items');
    const newItemInput = document.getElementById('newItemText');

    const liElement = document.createElement('li');
    liElement.textContent = newItemInput.value;

    const aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = '[Delete]';

    // На долния ред е изтриване по референция
    aElement.addEventListener('click', () => liElement.remove());

    // Друг начин за изтриване чрез parent елемента
    // aElement.addEventListener('click', (event) =>{
    //     event.currentTarget.parentElement.remove();
    // })

    liElement.append(aElement);


    itemListElement.append(liElement);
    
    newItemInput.value = '';

}