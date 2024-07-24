// Task 1: Declare variables for grocery items and quantities
let numberOfMilks = 2;
let priceOfMilk = 3;

let numberOfBreads = 1;
let priceOfBread = 2;

let numberOfEggs = 2;
let priceOfEggs = 4;

// Task 2: Calculate total cost for each item
let totalMilkCost = numberOfMilks * priceOfMilk;
let totalBreadCost = numberOfBreads * priceOfBread;
let totalEggsCost = numberOfEggs * priceOfEggs;

// Task 3: Calculate grand total
let grandTotal = totalMilkCost + totalBreadCost + totalEggsCost;

// Task 3: Log itemized costs and grand total
console.log(
  "Milk:",
  numberOfMilks,
  "x $",
  priceOfMilk,
  "=",
  "$" + totalMilkCost
);
console.log(
  "Bread:",
  numberOfBreads,
  "x $",
  priceOfBread,
  "=",
  "$" + totalBreadCost
);
console.log(
  "Eggs:",
  numberOfEggs,
  "x $",
  priceOfEggs,
  "=",
  "$" + totalEggsCost
);
console.log("Grand Total: $", grandTotal);
