function solve(inputArr) {
  let obj = {};

  for (const element of inputArr) {
    let [town, product, price] = element.split(" | ");

    price = Number(price);

    if (!obj.hasOwnProperty(product)) {
      obj[product] = { price, town };
    } else if (obj.hasOwnProperty(product) && obj[product].price > price) {
      obj[product] = { price, town };
    }
  }

  for (const key in obj) {
    let values = obj[key];

    console.log(`${key} -> ${values.price} (${values.town})`);
  }
}

solve([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);
