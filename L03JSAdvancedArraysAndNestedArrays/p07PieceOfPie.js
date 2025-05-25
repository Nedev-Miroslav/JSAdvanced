/**
 * 
 * @param {Array} inputArr 
 * @param {string} fistFlavors 
 * @param {string} secondFlavors 
 * @returns 
 */
function solve(inputArr, fistFlavors, secondFlavors){
    let firstIndex = inputArr.indexOf(fistFlavors);
    let secondIndex = inputArr.indexOf(secondFlavors);

    let result = inputArr.slice(firstIndex, secondIndex + 1);

    return result;

}

console.log(solve(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
   'Key Lime Pie',
   'Lemon Meringue Pie'
   ));

   console.log(solve(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
   'Pot Pie',
   'Smoked Fish Pie'
   ));