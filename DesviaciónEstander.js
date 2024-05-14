let array = [6, 2, 3, 1];

function desviacionEstandar(array) {
  let newarr = [];
  let promedio;
  let sumArrAll = array.reduce((total, current) => {
    return total + current;
  });
  promedio = sumArrAll / array.length;
  for (let i = 0; i < array.length; i++) {
    let squareNumber = Math.pow(array[i] - promedio, 2);
    newarr.push(squareNumber);
  }

  let sumArrEvery = newarr.reduce((total, current) => {
    return total + current;
  });

  let valuesDivLenght = sumArrEvery / array.length;

  let raiz = Math.sqrt(valuesDivLenght);

  return raiz.toFixed(2);
}

console.log(desviacionEstandar(array));
