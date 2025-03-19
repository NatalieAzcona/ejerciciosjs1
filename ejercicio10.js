const numbers = [12, 21, 38, 5, 45, 37, 6];


function average(numbers) {

    let sum = 0;
    numbers.forEach(number => {
        sum += number;
    });
    let ave = sum / numbers.length;
    return ave;
}

console.log(average(numbers));

