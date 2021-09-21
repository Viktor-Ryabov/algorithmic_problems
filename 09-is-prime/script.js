/*
 * Задача 9: «Простое число»
 *
 * Напишите функцию isPrime(n) для проверки, простое число n или нет.
 * Напомним, что число называют простым, если оно больше 1 и делится
 * без остатка только на 1 и на само себя.
 * 
 * На вход функция должна принимать число n и возвращать true,
 * если n простое, и false — если нет.
*/

function isPrime(n) {
    // Напишите код здесь
    let arrowNumbers = [];
    for (i = 0; i <= n; i++) {
        arrowNumbers.push(i);
    }
    if (n === 0 || n === 1){
        return false;
    } else if (n % 2 === 0 && n !==2){
        return false;
    } else if (n in arrowNumbers){
        const check = (i) => arrowNumbers[i] % n === 0 && arrowNumbers[i] !== n;
        return arrowNumbers.some(check);
    } else {
        const check = (i) => n % arrowNumbers[i] === 0 && n !== 0 && n !== 1;
        return arrowNumbers.some(check);
    } 
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(isPrime(0)); // false
console.log(isPrime(1)); // false
console.log(isPrime(3)); // true
console.log(isPrime(6)); // false
console.log(isPrime(17)); // true
console.log(isPrime(73));
