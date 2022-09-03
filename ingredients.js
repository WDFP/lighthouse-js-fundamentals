const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let answer = 0
while (answer < ingredients.length) {
  console.log(ingredients[answer]);
  answer++;
}
// Write a for loop that prints out the contents of ingredients:
const totals = 0
for (let totals = 0; totals < ingredients.length; totals++) {
  console.log(ingredients[totals]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = ingredients.length -1; i >= 0; i--) {
  console.log(ingredients[i]);
}
