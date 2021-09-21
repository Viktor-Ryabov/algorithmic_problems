/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {
    const arrayNum = [];
    for (i = 1; i <= n; i++){
        arrayNum.push(i);
    }
    if (n >= 0 && Number.isInteger(n) === true) {
        if (n === 0){
            return 1;
        } else {
            const total = (a, b) => a * b;
            return arrayNum.reduce(total);
        }
    } else {
        return "ошибка ввода";
    }
}


// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720
console.log(factorial("6"));
console.log(factorial(NaN));
console.log(factorial(15));