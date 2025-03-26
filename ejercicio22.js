const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

let vegan = [];
let i = 0;

for (let food of foodSchedule) {
  if (food.isVegan === true) {
    vegan.push(food);
  } else {
    if (i < fruits.length) {
      vegan.push({name: fruits[i], isVegan: true});
      i++;
      }
  }
}

console.log(vegan);
