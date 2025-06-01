function solve(inputArr){

    inputArr.sort((a, b) => {
        
        if(a.length === b.length){
            return a.localeCompare(b);
        }

        return a.length - b.length;
    });

    for (const element of inputArr) {
        console.log(element);
    }

}

solve(['alpha', 
    'beta', 
    'gamma']
    );


solve(['Isacc', 
    'Theodor', 
    'Jack', 
    'Harrison', 
    'George']
    
    );