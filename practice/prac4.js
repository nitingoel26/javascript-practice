function ArrayFlatten(value, res) {
  if (Array.isArray(value)) {
    for (let item of value) {
      ArrayFlatten(item, res);
    }
  } else {
    res.push(value);
  }
}
export default function flatten(value) {
  let res = [];
  ArrayFlatten(value, res);
  return res;
}

return value.reduce((acc, item) => {
  Array.isArray(item) ? acc.push(...flatten(item)) : acc.push(item);
  return acc;
}, []);
