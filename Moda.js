let array = [5, 7, 9, 7, 3, 5, 8, 7];

function Moda(array) {
  let moda = array.reduce(function (obj, number) {
    if (!obj[number]) {
      obj[number] = 0;
    }
    obj[number]++;
    return obj;
  }, {});

  const max = Math.max.apply(null, Object.values(moda));
  const maxKey = Object.keys(moda).find((key) => moda[key] === max);
  return maxKey;
}

console.log(Moda(array));
