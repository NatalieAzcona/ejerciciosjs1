const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];


function findLongestWord() {
    let longestWord = '';

    avengers.forEach(avenger => {
        if (avenger.length > longestWord.length) {
            longestWord = avenger;
        }
    });

    return longestWord;
}

console.log(findLongestWord());


