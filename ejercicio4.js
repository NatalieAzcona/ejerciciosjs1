// 1.1 //
const avengers = ["Hulk", "Spiderman", "Black Panther"];
console.log(avengers[0]);

// 1.2 //
avengers[0] = "Ironman";
console.log(avengers[0]);

// 1.3 //
console.log(avengers.length);

// 1.4 //
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length-1]);

// 1.5 //
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0], rickAndMortyCharacters[rickAndMortyCharacters.length-1]);

// 1.6 //
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters);


