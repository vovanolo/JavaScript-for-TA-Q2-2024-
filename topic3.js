// while 
// for 

// console.log(0);
// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// while (condition){}

// let i = 0; // 1 2 3 ... 10

// while (i < 10){
//     console.log(i); // 0 1 2 ... 9
//     i++;
// }

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// for (let i = 1; i < 10; i+= 2){
//     console.log(i);
// }

// for (let i = 9; i >= 0; i--){
//     console.log(i);
// }


// break 
// continue

// for (let i = 0; i < 10; i++){
//     console.log(i);
//     if (i === 5){
//         break;
//     }
// }

// for (let i = 0; i < 10; i++){
//     if (i === 5){
//         continue;
//     }
//     console.log(i);
// }

// let students = ["Peter", "john", "Max"];

// for (let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }


// for (let i = 0; i < students.length; i++){
//     console.log(students[i]);
//     if(students[i] === "john"){
//         break;
//     }
// }

// for (let i = 0; i < students.length; i++){
//     if (students[i] === 'john'){
//         students[i] = 'Volodymyr';
//     }
// }

// console.log(students);

// for of 
// for in

// let students = ["Peter", "john", "Max"];

// for (let element of students){
//     console.log(element);
// }

// for (let index in students){
//     // console.log(index);
//     // console.log(students[index]);
//     console.log(`Index: ${index} - Value: ${students[index]}`);
// }

// function naming(){
// 
// }

// function hello(){
//     console.log("Hello");
// }

// hello();
// hello();
// hello();
// hello();
// let number1 = 5;
// let number2 = 10

// function multiplication(a, b){
//     console.log(a * b);
// }

// multiplication(number1, number2);
// multiplication(10, 20);

// return

// function multiplication(a, b){
//     return a * b;
// }

// // console.log(multiplication(10, 20));
// let result = multiplication(10, 20);

// console.log(result);

// function multiplication(a, b){
//     return a * b;
// }

// console.log(multiplication(10, 20, 32,43,56,34));

// function multiplication(){
//     // console.log(arguments[0]);
// }
// function multiplication(){
//     // console.log(arguments[0]);
//     let result = 1;
//     for(let i = 0; i< arguments.length; i++){
//         // console.log(arguments[i]);
//         result *= arguments[i];
//     }
//     // console.log(result);
//     return result;
// }

// console.log(multiplication(2,2,2));

// function declaration
// declaration();


// function declaration(){
//     console.log("Declaration function");
// }

// // function expression
// expression();


// const expression = function(){
//     console.log("Expression function");
// }


// array loop methods

// forEach map reduce find filter ... 


// let students = ["Peter", "john", "Max"];

// students.forEach(function(){
//     // console.log(element);
//     // console.log(index);t
//     console.log(`Index: ${index} - Value: ${element}`)
// })