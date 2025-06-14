function echo(prefix, ...args) {
  return `prefix ${args.join(" ")}`;
}

console.log(echo.call(undefined, "test", "this", "is", "a", "test"));

console.log(echo("test", "this", "is", "a", "test")); // returns "prefix this is a test"

// REST
const a = [1];
const a1 = [2];
const a2 = [3];

//flatMap
const c = [...a, ...a1, ...a2];
console.log(c);

// deep clone

const obj1 = {
  a: 1,
  b: 2,
  c: 3,
};
// shallow clone
// let obj2 = obj1;
// obj1.a = 4;
let obj2 = { ...obj1, d: 5, e: 6 };
console.log(obj2);

// deep clone
// let obj2 = JSON.parse(JSON.stringify(obj1));
obj1.a = 4;

const arr = [
  {
    a: 1,
    b: 2,
    c: 3,
  },
  {
    d: 4,
    e: 5,
    f: 6,
  },
];
const newObj = arr.reduce(
  (n, acc) => ({
    ...n,
    ...acc,
  }),
  {}
);

console.log(newObj); 
