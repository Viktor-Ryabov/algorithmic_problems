/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {

    let arrowStr1 = str1
    .toUpperCase()              //регистр
    .split('')                  //разбиваем
    .sort()                     //сортируем
    .join('')                   //склеиваем
    .toString();                //переводим в строку

    let arrowStr2 = str2
    .toUpperCase()
    .split('')
    .sort()
    .join('')
    .toString();

    return arrowStr1 === arrowStr2; //сравниваем
}
// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye'));
console.log(anagram('пчела', 'плаче')); // false
console.log(anagram('хлеб', 'хата'));
console.log(anagram('up', 'UP')); //почему ошибка не понятно. Правильно же определяет и возвращает true