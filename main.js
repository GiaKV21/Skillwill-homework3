// დავალება 1

function sumAndProduct(...nums) {
  if (nums.length < 3) {
    throw new Error("Provide at least 3 numbers (n > 2).");
  }
  const first = nums[0] + nums[1];
  const second = nums.slice(2).reduce((prod, n) => prod * n, 1);

  return [first, second];
}
console.log(sumAndProduct(2, 3, 4, 5));

// დავალება 2

function getUserCity(user = {}) {
  const { banks = [] } = user;
  const [, , thirdBank = {}] = banks;
  const { address: { city } = {} } = thirdBank;

  return city;
}

const user1 = { banks: [{}, {}, { address: { city: "Tbilisi" } }] };
console.log(getUserCity(user1));

const user2 = { banks: [{}, {}] };
console.log(getUserCity(user2));

// დავალება 3

function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = { a: 1, b: { c: 2, d: [3, { e: 4 }] } };
const copy = cloneObject(original);

console.log(copy);
console.log(copy === original);
console.log(copy.b === original.b);
