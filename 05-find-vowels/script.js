/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/
const vowel = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

function findVowels(str) {
    let vowelArray = [];
    let newArray = str.split('');
    console.log(newArray); 
    for(i = 0; i < newArray.length; i++) {
        if(vowel.includes(newArray[i].toLowerCase())){
            vowelArray.push(newArray[i]);
        }
    };
    return vowelArray.length;

    // Напишите код здесь
    
    // let uniqueArrow = [];
    // newArrow.forEach(function(item) {
    // console.log(newArrow);
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3