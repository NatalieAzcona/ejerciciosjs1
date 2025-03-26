const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
];

let minors = [];
let adults = [];

for (let user of users) {
    user.years >= 18 ? adults.push(user) : minors.push(user);
}

console.log(minors.name + "son menores");
console.log(adults.name + "son mayores");


