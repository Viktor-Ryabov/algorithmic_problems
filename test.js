function isPrime(num) {
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
    if (num <= 1) {
      return false;
    } else if (num > 9){
        for (let i = 0; i < numbers.length; i++){
              if (num % numbers[i] === 0){
                return false;
              } else {
                return true;
              }
        }
    } else {
        if (num = 2 || num === 3 || num === 7){
            return true;
        } else {
            return false;
        }
    }
}
