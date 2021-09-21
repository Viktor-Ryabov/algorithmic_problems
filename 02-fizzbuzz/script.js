/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    const arrayNum = [];
    for (i = 1; i <= num; i++){
        arrayNum.push(i);
    }
    for (let j = 2; j <arrayNum.length; j++){
        if (arrayNum[j] % 3 === 0 && arrayNum[j] % 5 !== 0) {
            arrayNum[j] = "fizz";
        } else if (arrayNum[j] % 3 !== 0 && arrayNum[j] % 5 === 0) {
            arrayNum[j] = "buzz";
        } else if (arrayNum[j] % 3 === 0 && arrayNum[j] % 5 === 0) {
            arrayNum[j] = "fizzbuzz";
        }
    }
    for( k = 0; k < arrayNum.length; k++){
        console.log(arrayNum[k]);
    }
}
// Протестируйте решение, вызывая функцию с разными аргументами:
fizzBuzz(7);
fizzBuzz(6);
fizzBuzz(15);
