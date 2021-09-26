// дано число. Нужно перемножить его простые числа. нужно перемножать пока не останется однозначное число. Вернуть количество раз перемножения.

function persistence(num) {
  if (num <= 9) {
    return 0;
  }
  const arr = Array.from(num.toString()).map(Number);
  const reducer = (previousValue, currentValue) => previousValue * currentValue;
  let result = arr.reduce(reducer);
  if (result <= 9) {
    return 1;
  } else {
    let sum = 1;
    while (result > 9) {
      result = Array.from(result.toString()).map(Number);
      result = result.reduce(reducer);
      sum++;
    }
    return sum;
  }
}

persistence(0);
persistence(4);
persistence(39);
