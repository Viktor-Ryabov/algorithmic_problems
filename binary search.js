function binary(list, item){
    low = 0;
    higth = list.length - 1;
    while (low <= higth){
        mid = (low + higth) / 2;
        guess = Math.floor(mid);
        if (guess == item){
            return mid;
        } else if (guess > item){
            higth = mid - 1;
        } else {
            low = mid + 1;
        }
    return None;
    }
}
myList = [1, 3, 5, 7, 9];

binary(myList, 3);
binary(myList, -1);