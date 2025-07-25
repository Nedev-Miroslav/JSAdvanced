function filterEmployees(data, criteria) {
    let employees  = JSON.parse(data);

    if(criteria === "all"){
        employees.forEach((employee, index) => {
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        });

    }else{
        let [key, value] = criteria.split('-');
        let filteredEmployees = employees.filter(employee => employee[key] === value);
        filteredEmployees.forEach((employee, index) => {
            console.log(`${index}. ${employee.first_name} ${employee.last_name} - ${employee.email}`);
        });
    }


}

let inputData1 = '[{ "id": "1", "first_name": "Ardine", "last_name": "Bassam", "email": "abassam0@cnn.com", "gender": "Female" }, { "id": "2", "first_name": "Kizzee", "last_name": "Jost", "email": "kjost1@forbes.com", "gender": "Female" }, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }]';
let inputData2 = '[{ "id": "1", "first_name": "Kaylee", "last_name": "Johnson", "email": "k0@cnn.com", "gender": "Female" }, { "id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" }, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]';

let criteria1 = 'gender-Female';
let criteria2 = 'last_name-Johnson';


filterEmployees(inputData1, criteria1); 
filterEmployees(inputData2, criteria2); 
