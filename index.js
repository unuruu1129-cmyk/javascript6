// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// const fruits = ["Алим", "Банана", "Жүрж"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let i = 0; i <= 20; i+=2) {
//     console.log(i);
// }

// for (let i = 1; i <= 20; i+=2) {
//     console.log(i);
// }

// let word = "hello"
// for (let i = 0; i <= word.length; i++) {
//     console.log(word[i]);
// }

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 0; i <= 100; i+=2) {
//   sum += i;
// }
// console.log(sum);

// let squares = [];
// for (let i = 1; i <= 10; i++) {
//   squares.push(i**2);
// }
// console.log(squares);

// let numbers = [5, 10, 15, 20];
// let subNumbers = 0;
// for (let i = 0; i < numbers.length; i++) {
//   subNumbers += numbers[i];
// }
// console.log(subNumbers);

// let numbers = [10, 20, 30, 40];
// let subNumbers=0;
// for (let i=0; i< numbers.length; i++){
//     subNumbers+=numbers[i]
// }console.log(subNumbers/numbers.length);

// let word = "school";
// let total = 0;
// for (let i = 0; i < word.length; i++) {
// ++total;
// }console.log(total);

// let numbers = [3, 8, 12, 5, 6, 7];
// let total = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     total++;
//   }
// }
// console.log(total);

// for (let i = 1; i < 50; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i < 100; i++) {
//   if (i % 3 === 0 && i%5===0) {
//     console.log(i);
//   }
// }

// let word = "hello";
// for (i = word.length - 1; i >= 0; i--) {
//   console.log(word[i]);
// }

// let word = "banana";
// let letter = "a";
// let total = 0;
// for (i = 0; i < word.length; i++) {
//   if (word[i]===letter) {
//     ++total;
//   }
// }
// console.log(total);

// //25
// let word = "JavaScript";
// let total = 0;
// for (let i = 0; i < word.length; i++) {
//   const asciiCode = word.charCodeAt(i);
//   if (asciiCode >= 65 && asciiCode <= 90) {
//     ++total;
//   }
// }
// console.log(total);

// for (i = 100; i > 0; i -= 10) {
//   console.log(i);
// }

// const sentence = "Би JavaScript сурч байна";
// let total = 0;
// for (i = 0; i < sentence.length; i++) {
//   if (sentence[i] === " ") {
//     ++total;
//   }
// }
// console.log(total);

// let a = 2;
// let b = 5;

// let total = 1;

// for (i = 1; i <= b; i++) {
//   total = total * a;
// }
// console.log(total);

// let n = 5;
// let total = 1;
// for (i = 1; i <= n; i++) {
//   total = total * i;
// }console.log(total);

// for (i = 1; i <= 10; i++) {
//   console.log("5 x " + i + " = " + 5 * i);
// }

// let numbers = [4, 7, 2, 7, 9];
// const target = 7;
// let firstIndex = -1;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === target) {
//     firstIndex = i;
//     break;
//   }
// }

// console.log(firstIndex);

// const number = 12;
// for (let i = 1; i <= number; i++) {
//   if (number % i === 0) {
//     console.log(i);
//   }
// }

// const n = 5;
// for (let i=1;i<=n; i++){{console.log("*".repeat(i));
// }}

// let numbers = [5, 12, 20, 8] ;
// for (let i=0; i<numbers.length; i++){
//     console.log(numbers[i]+10);
// }

// let booleans = [false, false, true, true];
// for (let i=0; i<booleans.length; i++){
//     if (booleans[i]===false);{
//         console.log(true);
//     }
// }

// let products = [{ title: "Уут", price: 500 }, { title: "Сав", price: 800 }];
// for (let i=0; i<products.length; i++){
//     if (products[i].price>=600){console.log(products[i]);
//     }
// }

// let employees = [{ name: "Амгалан", department: "IT" }, { name: "Номин", department: "HR" }];
// for (let i=0; i<employees.length;i++){
//     console.log(employees[i].name);
//     }

// const students = [{ name: "Бат", score: 85 }, { name: "Сара", score: 92 }];
// for (let i=0;i<students.length;i++){
//     if (students[i].score>90){console.log(students[i].name);
//     }
// }

// products = [{ title: "Уут", stock: 5 }, { title: "Сав", stock: 0 }];
// for (let i=0; i<products.length;i++){
//     if (products[i].stock>0){
//         console.log(products[i]);
//     }
// }

//  const books = [{ title: "Монгол түүх", year: 2000 }, { title: "Газар зүй", year: 2010 }];
//  for (let i=0; i<books.length;i++){
//     if (books[i].year>2005){
//         console.log(books[i]);
//     }
// }

// const students = [{ name: "Бат", age: 20 }, { name: "Сара", age: 22 }];
// let total=0;
//  for (let i=0; i<students.length;i++){total=total+students[i].age
 
// };
// console.log(total/students.length);

// const products = [{ title: "Уут", price: 500 }, { title: "Сав", price: 800 }];
// const newProducts = [];
// for (let i=0;i<products.length;i++){

//   const newPrice = products[i].price * 1.1;

//   newProducts.push({
//     title: products[i].title,
//     price: newPrice
//   });

// }

// console.log(newProducts);

// let employees = [
//     { name: "Амгалан", salary: 1000, active: true, department: "IT" },
//     { name: "Номин", salary: 1500, active: false, department: "HR" },
//     { name: "Баяр", salary: 1200, active: true, department: "IT" }
// ];

// let total = 0;
// let count = 0;

// for (let i = 0; i < employees.length; i++) {

//     if (employees[i].active === true) {
//         total += employees[i].salary;
//         count++;
//     }

// }

// if (count > 0) {
//     console.log(total / count);
// } else {
//     console.log("Идэвхтэй ажилтан байхгүй");
// }
