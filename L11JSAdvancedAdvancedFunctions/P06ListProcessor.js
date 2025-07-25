function listProcessor(commands){
    
    let collection = [];

    const processor = {
        add: (str) => {
            collection.push(str);
        },
        remove: (str) => {
            collection = collection.filter(item => item !== str);
        },
        print: () => {
            console.log(collection.join(','));
        }
    };

    commands.forEach(command => {
        const [action, value] = command.split(' ');

        if(action === 'add'){
            processor.add(value);
        }else if(action === 'remove'){
            processor.remove(value);
        }else if(action === 'print'){
            processor.print();
        }

    });

}



listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']); 

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']); 