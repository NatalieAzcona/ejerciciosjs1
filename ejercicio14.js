const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(name, arr) {
    let totalWord = 0;

    for (word of arr) {
        if (word == name) {
            totalWord++;
        }
    }
    return totalWord;
  }

console.log(repeatCounter('code', counterWords));
