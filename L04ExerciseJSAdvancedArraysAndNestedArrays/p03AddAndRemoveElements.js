function solve(commands){
    let arr = [];
    let currentNum = 1;


    commands.forEach(command => {
        if(command === "add"){
            arr.push(currentNum);
        } else if(command === "remove"){
            if(arr.length > 0){
                arr.pop();
            }
        }

        currentNum++;
    });

    if(arr.length === 0){
        console.log("Empty")
    }else{
        arr.forEach(num => console.log(num));
    }
}

solve(['add', 'add', 'add', 'add']); 
solve(['add', 'add', 'remove', 'add', 'add']); 
solve(['remove', 'remove', 'remove']);