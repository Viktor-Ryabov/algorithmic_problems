/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход целое неотрицательное
 * число n. Возвращать функция должна количество нулей, содержащихся в аргументе.
 *
 */

function countZeros(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {                //цикл перебора от 0 до Н
    `${i}`.split("").forEach((element) => {     //добавляем  в массив каждый эдемент
      if (element.includes("0")) {              //если содержит 0    
        sum += 1;                               //прибавляем к сумме 1
      }
    });
  }
  return sum;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(countZeros(5));
console.log(countZeros(23)); // 2 – два нуля, по одному в числах 10 и 20
console.log(countZeros(100));

console.log(countZeros(342));

console.log(countZeros(1000));
console.log(countZeros(1050));
