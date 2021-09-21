/*
 * Задача 8: «Фибоначчи»
 *
 * Последовательность Фибоначчи — это порядок чисел, где каждое последующее
 * число является суммой двух предыдущих: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
 *
 * Напишите функцию, которая принимает на вход число n и возвращает n-й элемент
 * последовательности Фибоначчи.
 */

function fibonacci(n) {
    let prev = 0, next = 1;         
    for(let i = 1; i < n; i++){     // 1й               //2й        //3й        4й
      let temp = next;              // темп = 1         1           2           3
      next = prev + next;           // нескт = 0 + 1    1+1 = 2     1+2=3       2+3=5
      prev = temp;                  // прев = 1         1           2           3
    }
    return prev;
  }



// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(fibonacci(0)); //
console.log(fibonacci(1)); //
console.log(fibonacci(2));
console.log(fibonacci(3)); //
console.log(fibonacci(4)); //
console.log(fibonacci(5)); //
console.log(fibonacci(6));
console.log(fibonacci(7)); //
console.log(fibonacci(8)); //
console.log(fibonacci(9)); //
