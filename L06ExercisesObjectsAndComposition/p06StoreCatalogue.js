function solve(inputArr) {
  let obj = {};

  for (const element of inputArr) {
    let [product, price] = element.split(" : ");
    price = Number(price);

    obj[product] = price;
  }

  let sortArr = Object.entries(obj).sort((arr1, arr2) =>
    arr1[0].localeCompare(arr2[0])
  );

  let currentCharGroup = "";
  for (const el of sortArr) {
    let key = el[0];
    let value = el[1];

    if (currentCharGroup !== key[0]) {
      currentCharGroup = key[0];
      console.log(currentCharGroup);
    }
    console.log(`  ${key}: ${value}`);
  }
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
