const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];


  function finderName(name, arr) {
    let index = arr.indexOf(name);
    
    if (index !== -1) {
      return [true, index];
    } else {
      return [false];
    }

}

console.log(finderName('Steve', nameFinder));
