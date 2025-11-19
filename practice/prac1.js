const nestedObj = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: {
      name: "USA",
      code: "US",
    },
  },
  hobbies: [
    "reading",
    "coding",
    { type: "sports", favorites: ["tennis", "basketball"] },
  ],
};

let res = [];
function flattenObject(val) {
  if (["string", "number", "boolean"].includes(typeof val)) {
    res.push(val);
  } else if (Array.isArray(val)) {
    for (let item of val) {
      flattenObject(item);
    }
  } else if (typeof val === "object" && val !== null) {
    for (let key in val) {
      flattenObject(val[key]);
    }
  }
}
console.log(res);
