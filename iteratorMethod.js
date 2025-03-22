 // Task 1:Using forEach()
// Step 1: Create an array of five favorite cities
let cities = ["New York", "Tokyo", "Paris", "Sydney", "London"];

// Step 2: Use forEach() to log each city in uppercase
cities.forEach(city => console.log(city.toUpperCase()));

// Output:
// NEW YORK
// TOKYO
// PARIS
// SYDNEY
// LONDON

//Task 2 : Transforming with map()
// Step 1: Create an array called numbers with the numbers 1-5
let numbers = [1, 2, 3, 4, 5];

// Step 2: Use map() to create an array where each number is squared
let squares = numbers.map(num => num * num);

// Step 3: Log the new array
console.log(squares);

// Output:
// [1, 4, 9, 16, 25]

//Task 3:Filtering with filter()
// Step 1: Create an array called scores
let scores = [85, 42, 90, 75, 30, 100];

// Step 2: Use filter() to create an array of scores greater than or equal to 80
let highScores = scores.filter(score => score >= 80);

// Step 3: Log the new array
console.log(highScores);

// Output:
// [85, 90, 100]

//Task 4:Finding with find() and findIndex()
// Step 1: Create an array of favorite foods
let favoriteFood = ["Pizza", "Sushi", "Pasta", "Taco", "Burger", "Ramen"];

// Step 2: Use find() to locate the first food with more than 4 letters
let firstLongFood = favoriteFood.find(food => food.length > 4);
console.log(firstLongFood); // Output: "Pizza"

// Step 3: Use findIndex() to find the index of that food
let foodIndex = favoriteFood.findIndex(food => food.length > 4);
console.log(foodIndex);
//Output: 0
