//Media(Promedio)

let array = [10, 15, 20, 25, 30];

function Media(array) {
  let promedio = array.reduce((total, current) => {
    return total + current;
  });

  return promedio / array.length;
}

console.log(Media(array));
