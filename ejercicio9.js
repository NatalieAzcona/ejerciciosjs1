const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll() {
    let sum = 0;
    numbers.forEach (number => {
        sum += number;
    });
    return sum;
}

console.log(sumAll(numbers));
