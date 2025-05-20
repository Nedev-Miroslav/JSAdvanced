function wordsUppercase(input) {

    const words = input.match(/\w+/g);
    
    if (words) {
        console.log(words.map(word => word.toUpperCase()).join(', '));
    } else {
        console.log('');
    }
}


wordsUppercase('Hi, how are you?');
wordsUppercase('hello');